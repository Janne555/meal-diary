import { Router } from 'express'
import passport from 'passport'
import { env } from '../constants'

const auhtenticationRoutes = Router()

auhtenticationRoutes.get('/callback',
  passport.authenticate(env.AUTH_STRATEGY, { failureRedirect: '/login', session: false }), (req, res) => {
    if (req.user) {
      res.redirect("/")
    } else {
      throw new Error('user null')
    }
  }
);

auhtenticationRoutes.get('/login',
  passport.authenticate(env.AUTH_STRATEGY, { session: false }), (req, res) => {
    res.redirect("/");
  })

export default auhtenticationRoutes