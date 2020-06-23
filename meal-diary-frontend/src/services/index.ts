import { BleScale } from "../types"

type BLEScaleEventListener = (event: BleScale.BLEScaleEvent) => void
type BLEConnectionStatusEventListener = (event: BleScale.BleScaleConnectionEvent) => void


class BLEScaleService {
  private static instance = new BLEScaleService(250)

  private intervalId?: NodeJS.Timeout
  private pollingFrequency: number
  private weightCharacteristic?: BluetoothRemoteGATTCharacteristic
  private bleServer?: BluetoothRemoteGATTServer
  private weightValue?: number
  private _isConnected: boolean = false

  private changeListeners: Set<BLEScaleEventListener> = new Set()
  private connectionStatusListeners: Set<BLEConnectionStatusEventListener> = new Set()


  private constructor(pollingFrequency: number) {
    this.pollingFrequency = pollingFrequency
  }

  static getInstance() {
    return BLEScaleService.instance
  }

  async connect() {
    console.log("connecting")

    try {
      if ("bluetooth" in navigator) {
        console.log("connecting")
        const device = await navigator.bluetooth.requestDevice({ filters: [{ services: ["weight_scale"] }] })
        device.addEventListener("gattserverdisconnected", this.disconnect.bind(this))
        this.bleServer = await device.gatt?.connect()

        if (this.bleServer) {
          const services = await this.bleServer.getPrimaryService("weight_scale")
          this.weightCharacteristic = await services.getCharacteristic("weight_measurement")
          this.intervalId = setInterval(this.readBleScale.bind(this), this.pollingFrequency)
          this._isConnected = true
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  async disconnect() {
    if ("bluetooth" in navigator) {
      if (this.intervalId != null) {
        clearInterval(this.intervalId)
      }

      this.bleServer?.disconnect()

      this._isConnected = false
    }
  }

  private async readBleScale() {
    try {
      const dataView = await this.weightCharacteristic?.readValue()
      const value = dataView?.getInt32(0, true)
      if (this.weightValue !== value && value != null) {
        this.changeListeners.forEach(listener => listener({ value }))
        this.weightValue = value
      }
    } catch (error) {
      console.error(error)
    }
  }

  addEventListener(eventName: "change", handler: BLEScaleEventListener): void
  addEventListener(eventName: "connectionstatus", handler: BLEConnectionStatusEventListener): void
  addEventListener(eventName: string, handler: BLEScaleEventListener | BLEConnectionStatusEventListener): void {
    switch (eventName) {
      case "change":
        this.changeListeners.add(handler as BLEScaleEventListener)
        break
      case "connect":
        this.connectionStatusListeners.add(handler as BLEConnectionStatusEventListener)
        break
      default:
    }
  }

  removeEventListener(eventName: "change", handler: BLEScaleEventListener): void
  removeEventListener(eventName: "connectionstatus", handler: BLEConnectionStatusEventListener): void
  removeEventListener(eventName: string, handler: BLEScaleEventListener | BLEConnectionStatusEventListener): void {
    switch (eventName) {
      case "change":
        this.changeListeners.delete(handler as BLEScaleEventListener)
        break;
      case "connect":
        this.connectionStatusListeners.delete(handler as BLEConnectionStatusEventListener)
        break
      default:
    }
  }

  get isConnected(): boolean {
    return this._isConnected
  }
}

export { BLEScaleService }
