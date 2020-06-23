import React from 'react'
import { useAuth0 } from '../../authentication';


function Login() {
  const { loginWithRedirect, isAuthenticated, logout, loading, getTokenSilently } = useAuth0()

  async function handleGetToken() {
    const token = await getTokenSilently()
    const el = document.createElement('textarea');
    el.value = token;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  return (
    <div style={{ margin: '1em' }}>
      <button disabled={!isAuthenticated} onClick={handleGetToken}>get token</button>
      <button disabled={loading} onClick={() => !isAuthenticated ? loginWithRedirect({}) : logout()}>{isAuthenticated ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Login