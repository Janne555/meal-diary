const envVarNames = [
  "REACT_APP_AUTH0_CLIENT_ID",
  "REACT_APP_AUTH0_DOMAIN",
  "REACT_APP_AUTH0_AUDIENCE"
]

envVarNames.forEach(envVarName => {
  if (!process.env[envVarName]) {
    throw Error(`Missing env variable ${envVarName}`)
  }
})