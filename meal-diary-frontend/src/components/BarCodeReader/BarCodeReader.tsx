import React, { useRef, useEffect, useState, useCallback } from 'react'
import Quagga from 'quagga'

const width = Math.min(window.innerWidth - 20, 640)
const height = Math.min(window.innerWidth - 20, 480)

type Props = {
  onClose: () => void
}

function BarCodeReader({ onClose }: Props) {
  const targetRef = useRef<HTMLDivElement>(null)
  const [barCode, setBarCode] = useState<string>()
  const [readerActive, setReaderActive] = useState(true)
  const quaggaInit = useCallback(() => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: targetRef.current,
        constraints: {
          width,
          height
        }
      },
      decoder: {
        readers: ["code_128_reader", "ean_8_reader", "ean_reader"]
      },
      locate: true
    }, (error) => {
      if (error) {
        console.error(error)
      }
      console.log("initialized")
      Quagga.start()
    })
  }, [])

  useEffect(() => {
    quaggaInit()

    Quagga.onDetected(result => {
      console.log(result)
      setBarCode(result.codeResult.code)
    })

    Quagga.onProcessed(event => {
      if (event) {
        const { boxes } = event
        const [a, b, c, d] = boxes[0]
        const canvas = document.querySelector("canvas")

        if (!canvas) {
          return
        }

        const ctx = canvas.getContext("2d")
        if (!ctx) {
          return
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.moveTo(...a)
        ctx.beginPath()
        ctx.lineTo(...b)
        ctx.lineTo(...c)
        ctx.lineTo(...d)
        ctx.lineTo(...a)
        ctx.closePath()
        ctx.stroke()
      }
    })

  }, [quaggaInit])

  function handleClick() {
    setReaderActive(!readerActive)

    if (readerActive) {
      Quagga.stop()
      navigator.getUserMedia({ video: true }, stream => {
        stream.getTracks()[0].stop()
      }, console.error)
    } else {
      quaggaInit()
    }
  }


  return (
    <div className="bar-code-reader">
      <p>Result:</p>
      <p>{barCode}</p>
      <button onClick={onClose}>Close</button>
      <div onClick={handleClick} style={{ height, width }} className="bar-code-reader-view" ref={targetRef}></div>
    </div>
  )
}

export default BarCodeReader