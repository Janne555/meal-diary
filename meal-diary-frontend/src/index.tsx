import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Auth0Provider, auth } from './authentication';

const client = new ApolloClient({
  request: async ({ setContext }) => {
    await auth.ready()
    const { auth0Client } = auth
    if (auth0Client) {
      const token = await auth0Client.getTokenSilently()
      setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    }
  },
  uri: `${window.location.origin}/graphql`
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const authCookie = document.cookie.split(";").find(c => c.trim().startsWith("auth-token="))

if (authCookie) {
  console.log(authCookie)
  document.cookie = `auth-token=;expires=${new Date().toUTCString()}`
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
