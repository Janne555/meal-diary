declare module 'quagga' {
  type DefaultType = {
    init(config: Confing, cb: (error: any) => void): void
    start(): void
    onDetected(cb: (result: CodeResult) => void): void
    onProcessed(cb: (event: ProcessEvent) => void): void
    stop(): void
  }

  type Confing = {
    inputStream: {
      name: "Live"
      type: "LiveStream"
      target?: HTMLElement | null
      constraints?: {
        width?: number
        height?: number
        facingMode?: "environment"
      }
    }
    decoder: {
      readers: ReaderType[]
      debug?: {
        drawBoundingBox?: boolean
        showFrequency?: boolean
        drawScanline?: boolean
        showPattern?: boolean
      }
    }
    locate?: boolean
  }

  type CodeResult = {
    codeResult: {
      code?: string
      format?: ReaderType
      start?: number
      end?: number
      codeset?: number
      startInfo?: {
        error?: number
        code?: number
        start?: number
        end?: number
      }
      decodedCodes?: {
        code?: number
        start?: number
        end?: number
      }[]
      endInfo?: {
        error?: number
        code?: number
        start?: number
        end?: number
      }
      direction?: number
    }
  }

  type ProcessEvent = {
    boxes: [[number, number], [number, number], [number, number], [number, number]][]
  }

  type ReaderType = "code_128_reader" | "upc_reader" | "upc_e_reader" | "ean_reader" | "ean_8_reader"

  export default {} as DefaultType
}


