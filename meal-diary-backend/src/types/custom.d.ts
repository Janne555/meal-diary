/**
 * Extend express' types
 */
declare namespace Express {
  interface User {
    name: string
    accessToken: string
  }
}