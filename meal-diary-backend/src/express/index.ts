import express from 'express'
import graphqlServer from '../graphql'
import { authenticationRoutes } from '../routes'
import passport from 'passport'
import { auth0Strategy, auth0JWTStrategy } from '../authentication'
import { env } from '../constants'

passport.use(auth0Strategy)
passport.use("auth0-jwt", auth0JWTStrategy)

const app = express()

app.use(passport.initialize())
app.use("/", authenticationRoutes)

app.use("/graphql", (req, res, next) => {
  passport.authenticate(`${env.AUTH_STRATEGY}-jwt`, { session: false }, (err, user) => {
    if (user) {
      req.user = user
    }

    next()
  })(req, res, next)
})

graphqlServer.applyMiddleware({ app })

export { app }