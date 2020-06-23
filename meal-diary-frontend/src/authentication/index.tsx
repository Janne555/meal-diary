import React, { useState, useEffect, useContext } from "react";
import createAuth0Client, { Auth0Client, Auth0ClientOptions, PopupLoginOptions, RedirectLoginOptions } from "@auth0/auth0-spa-js";

class Authentication {
  auth0Client?: Auth0Client
  private readonly _ready: Promise<void>

  constructor() {
    this._ready = new Promise(resolve => {
      this.init(resolve)
    })
  }

  async init(resolve: () => void) {
    this.auth0Client = await createAuth0Client({
      client_id: "Ne9o6YPmIEsNUG2DcnAsN7v3zIIt8EwY",
      domain: "dev-4sgra2h5.eu.auth0.com",
      audience: "localhost",
      redirect_uri: window.location.origin
    })
    resolve()
  }

  ready(): Promise<void> {
    return this._ready
  }

  getTokenSilently = async (): Promise<any> => {
    await this.ready()
    if (this.auth0Client) {
      return this.auth0Client.getTokenSilently()
    } else {
      return Promise.resolve()
    }
  }

  loginWithRedirect = async (options?: RedirectLoginOptions | undefined): Promise<void> => {
    await this.ready()
    if (this.auth0Client) {
      this.auth0Client.loginWithRedirect(options)
    }
  }
}

const auth = new Authentication()

type Auth0Context = Pick<Auth0Client, 'logout' | 'loginWithRedirect' | 'getTokenSilently'> & {
  isAuthenticated: boolean
  user: any
  loading: boolean
  popupOpen: boolean
  loginWithPopup: (params: PopupLoginOptions) => void
  handleRedirectCallback: () => Promise<void>
}

const Auth0Context = React.createContext<Auth0Context | undefined>(undefined)

function useAuth0() {
  const context = useContext(Auth0Context)
  if (!context) {
    throw Error("no context")
  } else {
    return context
  }
}

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

type Props = {
  children: React.ReactNode
  onRedirectCallback?: (...args: any) => void
}

function Auth0Provider({ children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [popupOpen, setPopupOpen] = useState(false)

  useEffect(() => {
    (async () => {
      await auth.ready()
      const { auth0Client } = auth
      if (auth0Client) {
        if (window.location.search.includes("code=") &&
          window.location.search.includes("state=")) {
          const { appState } = await auth0Client.handleRedirectCallback()
          onRedirectCallback(appState)
        }
        const isAuthenticated = await auth0Client.isAuthenticated()
        setIsAuthenticated(isAuthenticated)

        if (isAuthenticated) {
          const user = await auth0Client.getUser()
          setUser(user)
        }
      }
      setLoading(false)
    })()
  }, [])

  async function loginWithPopup(params: PopupLoginOptions = {}) {
    const { auth0Client } = auth
    if (auth0Client) {
      setPopupOpen(true)
      try {
        await auth0Client.loginWithPopup(params)
      } catch (error) {
        console.error(error)
      } finally {
        setPopupOpen(false)
      }
      const user = await auth0Client.getUser()
      setUser(user)
      setIsAuthenticated(true)
    }
  }

  async function handleRedirectCallback() {
    const { auth0Client } = auth
    if (auth0Client) {
      setLoading(true)
      await auth0Client.handleRedirectCallback()
      const user = await auth0Client.getUser()
      setLoading(false)
      setIsAuthenticated(true)
      setUser(user)
    }
  }

  function logout() {
    auth.auth0Client?.logout()
  }

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        logout,
        loginWithRedirect: auth.loginWithRedirect,
        handleRedirectCallback,
        getTokenSilently: auth.getTokenSilently
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

export {
  Auth0Provider,
  useAuth0,
  auth
}