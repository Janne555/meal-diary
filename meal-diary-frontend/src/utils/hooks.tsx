import { useState, useCallback, useEffect } from "react"
import { BleScale } from "../types"
import { BLEScaleService } from "../services"

function useBleScaleValue() {
  const [weight, setWeight] = useState(0)
  const listener = useCallback((event: BleScale.BLEScaleEvent) => {
    setWeight(event.value)
  }, [])

  useEffect(() => {
    const bleService = BLEScaleService.getInstance();

    (async () => {
      bleService.addEventListener("change", listener)
    })()

    return () => {
      bleService.removeEventListener("change", listener)
    }
  }, [listener])

  return {
    weight
  }
}

export {
  useBleScaleValue
}