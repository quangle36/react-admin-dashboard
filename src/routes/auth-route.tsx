import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { PATH } from "../configs";

function AuthRoute({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const access_token = window.localStorage.getItem('access_token');

  React.useEffect(() => {
    if (!access_token) return;

    async function checkAuthenticateToken() {
      try {
        const response = await fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/auth', {
          method: 'POST',
          headers: {
            'x-auth-token': access_token || ''
          },
        })
        const data = await response.json();
  
        if (data.isSuccess) {
          console.log('authenticate success: ', data.user.user)
          setIsAuthenticated(true);
        } else {
          navigate(PATH.LOGIN);
          window.localStorage.clear();
        }
      } catch (e) {
        navigate(PATH.LOGIN);
        window.localStorage.clear();
      }
    }
    checkAuthenticateToken();
  }, [access_token])

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }

  if (!isAuthenticated) return null;
  
  return children
}

export default AuthRoute