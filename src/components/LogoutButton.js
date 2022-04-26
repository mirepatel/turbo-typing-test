import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../index.scss";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className='btn' onClick={() => logout()}>
        Home
      </button>
    )
  )
}

export default LogoutButton