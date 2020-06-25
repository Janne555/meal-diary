import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Strategy, ExtractJwt } from 'passport-jwt'
import passport from 'passport'
import { Token } from './src/types'

/**
 * Set default environment variables
 */
process.env.APP_NAME = "test"
process.env.AUTH_STRATEGY = "local"
process.env.AUTH0_CLIENT_ID = "undefined"
process.env.AUTH0_DOMAIN = "undefined"
process.env.AUTH0_CLIENT_SECRET = "undefined"
process.env.AUDIENCE = "test"

dotenv.config({ path: "./test.env" })

/**
 * Create a token for test use and add a local jwt strategy to passport
 */

const testSecret = "testsecret"

const testUser: Token = {
  sub: "tester",
  permissions: []
}

const token = jwt.sign(testUser, testSecret)

const localJWTStrategy = new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: testSecret
}, (jwtPayload, done) => {
  return done(null, jwtPayload)
})

passport.use('local-jwt', localJWTStrategy)

export { token, testSecret, testUser }