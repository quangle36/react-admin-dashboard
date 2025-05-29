import React from 'react'
import { Navigate } from 'react-router-dom';

import { PATH } from "../configs";

function GuestRoute({ children }: React.PropsWithChildren) {
  const access_token = window.localStorage.getItem('access_token');
  const previousUrl = window.localStorage.getItem('previousUrl');
  const isExculed =  previousUrl === PATH.LOGIN || previousUrl === PATH.REGISTER;

  if (access_token && !isExculed) {
    return <Navigate to={previousUrl || PATH.ROOT} />
  }
  
  return children
}

export default GuestRoute