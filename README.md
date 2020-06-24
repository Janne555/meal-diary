# Meal Diary

## Development

Recommended approach is using Visual Studio Code's remote containers feature. Both projects have .devcontainer configs available. The setup requires a docker network with the name "meal-diary" to be available.

```shell
$ docker network create meal-diary
```

## Environment Variables

### Backend

The backend project uses dotenv to make use of .env files. In development it loads environment variables from dev.env and in tests it uses test.env

The app throws an error if a required environment variable is not set during startup.

The easiest way to include the following environment variables is to create the beforementioned files within `meal-diary-backend`

#### Required environment variables in production

```shell
AUTH0_CLIENT_ID=
AUTH0_DOMAIN=
AUTH0_CLIENT_SECRET=
AUTH0_USER_AUDIENCE=
AUTH0_AUDIENCE=
MONGO_URI=
APP_NAME=
RUN_FINELI_TASK_ON_START=true|false
PORT=
```

#### Additional environment variables required for testing
These will not throw an error but may cause tests to fail

```shell
AUTH0_TEST_TOKEN_URL=
AUTH0_TEST_CLIENT_ID=
AUTH0_TEST_CLIENT_SECRET=
AUTH0_TEST_AUDIENCE=
AUTH0_TEST_GRANT_TYPE=
```

### Frontend

Installing cypress in docker containers is problematic which is why the .devcontainer setups have an environment variable that makes cypress skip installing binaries. If you're not using the .devcontainer setup it is recommended to set `CYPRESS_INSTALL_BINARY=0` when installing the app in a container.