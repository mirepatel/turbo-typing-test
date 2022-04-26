import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from 'components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import App from 'TypingTestPallet';

function LoginLogoutFun() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <App />
    </>
  );
}

export default LoginLogoutFun;