import Auht0Strategy from 'passport-auth0'
import { env } from '../constants'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { passportJwtSecret } from 'jwks-rsa'

const auth0JWTStrategy = new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKeyProvider: passportJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: env.AUTH0_USER_AUDIENCE,
  issuer: `https://${env.AUTH0_DOMAIN}/`
}, (jwtPayload, done) => {
  return done(null, jwtPayload)
})

const auth0Strategy = new Auht0Strategy({
  domain: env.AUTH0_DOMAIN,
  clientID: env.AUTH0_CLIENT_ID,
  clientSecret: env.AUTH0_CLIENT_SECRET,
  callbackURL: '/callback',
  state: false
}, (accessToken, refreshToken, extraParams, profile, done) => {
  return done(null, profile)
})



export { auth0JWTStrategy, auth0Strategy }