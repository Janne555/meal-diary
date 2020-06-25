import { Router } from 'express'
import passport from 'passport'
import { env } from '../constants'

const auhtenticationRoutes = Router()

auhtenticationRoutes.get('/callback',
  passport.authenticate(env.AUTH_STRATEGY), (req, res) => {
    if (req.user) {
      res.cookie('auth-token', (req.user as any).accessToken, { maxAge: 86000, secure: true, sameSite: 'strict' })
      res.redirect(env.FRONTEND_URL)
    } else {
      throw new Error('user null')
    }
  }
);

auhtenticationRoutes.get('/login',
  passport.authenticate(env.AUTH_STRATEGY, { audience: env.AUDIENCE, scope: 'openid' } as any), (req, res) => {
    res.redirect("/");
  })

export default auhtenticationRoutes