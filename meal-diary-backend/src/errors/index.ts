class UnauthorizedRequest extends Error {
  constructor(message: string = "User is not authorized") {
    super(message)
  }
}

export {
  UnauthorizedRequest
}