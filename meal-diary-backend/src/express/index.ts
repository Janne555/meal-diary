import express from 'express'
import graphqlServer from '../graphql'
import { authenticationRoutes } from '../routes'
import passport from 'passport'
import { auth0Strategy, auth0JWTStrategy } from '../authentication'
import { env } from '../constants'
import session from 'express-session'
import bodyParser from 'body-parser'

passport.use(auth0Strategy)
passport.use("auth0-jwt", auth0JWTStrategy)

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

const app = express()

app.use(session({ secret: Math.random().toString(), saveUninitialized: false, resave: false, cookie: { secure: true } }))
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize())
app.use(passport.session());
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