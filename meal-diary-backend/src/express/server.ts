import express from 'express'
import { checkJwt } from '../middleware'
import graphqlServer from '../graphql'

const app = express()

app.use(checkJwt)
graphqlServer.applyMiddleware({ app })

export { app }