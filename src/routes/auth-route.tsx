import React from 'react'
import { Navigate } from 'react-router-dom';

import { PATH } from "../configs";

function AuthRoute({ children }: React.PropsWithChildren) {
  const access_token = window.localStorage.getItem('access_token');

  console.log('AuthRoute: ', access_token)

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }
  
  return children
}

export default AuthRoute