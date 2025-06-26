import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PATH } from "../configs";
import { setUser } from '../redux/appSlice';
import { httpRequest } from '../services/initRequest';

function AuthRoute({ children }: React.PropsWithChildren) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const access_token = window.localStorage.getItem('access_token');

  React.useEffect(() => {
    if (!access_token) return;

    async function checkAuthenticateToken() {
      try {
        const response: any = await httpRequest('/api/auth', {
          method: 'POST',
        })
        if (response.isSuccess) {
          dispatch(setUser(response?.user?.user))
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
  }, [])

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }

  if (!isAuthenticated) return null;
  
  return children
}

export default AuthRoute