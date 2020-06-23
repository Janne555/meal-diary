import React, { useState, useCallback, useEffect } from 'react'
import { BLEScaleService } from '../../services'
import { BleScale } from '../../types'

type RenderButtonProps = {
  handleClick: () => void
  connected: boolean
}

type Props = {
  renderButton?: (props: RenderButtonProps) => JSX.Element
}

function BleScaleConnectButton({ renderButton }: Props) {
  const [connected, setConnected] = useState(false)
  const listener = useCallback((event: BleScale.BleScaleConnectionEvent) => {
    setConnected(event.isConnected)
  }, [])

  useEffect(() => {
    BLEScaleService.getInstance().addEventListener("connectionstatus", listener)

    return () => {
      BLEScaleService.getInstance().removeEventListener("connectionstatus", listener)
    }
  }, [listener])

  function handleClick() {
    const instance = BLEScaleService.getInstance()
    console.log(instance.isConnected)

    if (!instance.isConnected) {
      instance.connect()
    } else {
      instance.disconnect()
    }
  }

  if (!("bluetooth" in navigator)) {
    return null
  }

  if (renderButton) {
    return renderButton({ handleClick, connected })
  }

  return <button onClick={handleClick}>{connected ? "Disconnect" : "Connect"}</button>
}

export default BleScaleConnectButton