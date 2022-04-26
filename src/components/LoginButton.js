import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../index.scss";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className='btn'  onClick={() => loginWithRedirect()}>
        Let's Type
      </button>
    )
  )
}

export default LoginButton