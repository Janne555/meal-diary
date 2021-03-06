const envVarNames = [
  "AUTH0_CLIENT_ID",
  "AUTH0_DOMAIN",
  "AUTH0_CLIENT_SECRET",
  "MONGO_URI",
  "APP_NAME",
  "AUDIENCE",
  "PORT",
  "AUTH_STRATEGY",
  "FRONTEND_URL",
  "TRUST_PROXY"
] as const


type EnvVarName = (typeof envVarNames)[number]


const defaults: Partial<Record<EnvVarName, string>> = {
  PORT: "4000",
  TRUST_PROXY: "false"
}

const env = (() => {
  const entries = envVarNames
    .map((envVarName): [EnvVarName, string] => {
      const value = process.env[envVarName]
      const defaultValue = defaults[envVarName]

      if (value) {
        return [envVarName, value]
      } else if (defaultValue) {
        return [envVarName, defaultValue]
      } else {
        throw Error(`Missing env variable ${envVarName}`)
      }
    })

  return Object.fromEntries(entries)
})()

export default env