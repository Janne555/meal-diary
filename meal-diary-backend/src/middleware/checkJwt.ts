import jwksRsa from 'jwks-rsa'
import jwt from 'express-jwt'
import env from '../constants/env';

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  audience: env.AUTH0_USER_AUDIENCE,
  issuer: `https://${env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
  credentialsRequired: false
});

export default checkJwt