const envVarNames = [
  "REACT_APP_AUTH0_CLIENT_ID",
  "REACT_APP_AUTH0_DOMAIN",
  "REACT_APP_AUDIENCE"
] as const

type EnvVarName = (typeof envVarNames)[number]

const env = (() => {
  return envVarNames.reduce(
    (env, name): Record<EnvVarName, string> => ({ ...env, [name]: getEnvOrThrow(name) }),
    {} as Record<EnvVarName, string>
  )
})()

function getEnvOrThrow(name: EnvVarName): string {
  const val = process.env[name]
  if (val) {
    return val
  } else {
    throw Error(`Missing env variable ${name}`)
  }
}

export default env