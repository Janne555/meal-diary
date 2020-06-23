import { Token } from "../types"

function isNonNillObject(obj: unknown): obj is object {
  return typeof obj === "object" && obj != null
}

function isToken(obj: unknown): obj is Token {
  if (!isNonNillObject(obj)) {
    return false
  }

  const { permissions } = obj as Partial<Token>

  if (permissions instanceof Array) {
    return permissions.every(permission => typeof permission === "string" && permission != null)
  }

  return false
}

function isNotNill<T>(param?: T | null): param is T {
  return param != null
}

export {
  isToken,
  isNotNill
}