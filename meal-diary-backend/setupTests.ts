import dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config({ path: "./test.env" })

let token: string | undefined = undefined

beforeAll(async () => {
  const payload = JSON.stringify({
    client_id: process.env.AUTH0_TEST_CLIENT_ID,
    client_secret: process.env.AUTH0_TEST_CLIENT_SECRET,
    audience: process.env.AUTH0_TEST_AUDIENCE,
    grant_type: process.env.AUTH0_TEST_GRANT_TYPE
  })

  const res = await fetch(`${process.env.AUTH0_TEST_TOKEN_URL}/oauth/token`, { method: 'POST', body: payload, headers: { 'Content-Type': 'application/json' } })
  const body = await res.json()
  token = body.access_token
})

export { token }