const envVarNames = [
  "AUTH0_CLIENT_ID",
  "AUTH0_DOMAIN",
  "AUTH0_CLIENT_SECRET",
  "MONGO_URI",
  "APP_NAME",
  "AUTH0_AUDIENCE",
  "AUTH0_USER_AUDIENCE",
  "NODE_ENV",
  "RUN_FINELI_TASK_ON_START",
  "PORT"
] as const

type EnvVarName = (typeof envVarNames)[number]

const env = (() => {
  const entries = envVarNames
    .map(envVarName => [envVarName, process.env[envVarName]])
    .filter((entry): entry is [EnvVarName, string] => {
      const [name, envVar] = entry
      if (envVar != null) {
        return true
      } else {
        throw Error(`Missing env variable ${name}`)
      }
    })

  return Object.fromEntries(entries)
})()

export default env