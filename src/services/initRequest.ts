import axios from "axios";
import { API_ENDPOINT } from "../configs";
import { setLoading } from "../redux/appSlice";
import { setErrorCode } from "../redux/errorSlice";

export const httpRequest = axios.create({
  baseURL: API_ENDPOINT,
  // timeout: 5000,
  showLoading: true
});

export function initRequest(store: any) {
  httpRequest.interceptors.request.use(function (config: any) {
    config.headers['Content-Type'] = 'application/json';

    if(config.showLoading) {
      store.dispatch(setLoading(true))
    }

    const access_token = window.localStorage.getItem('access_token');
    if(access_token) {
      config.headers['x-auth-token'] = access_token;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // Add a response interceptor
  httpRequest.interceptors.response.use(function (response: any) {
    if(response.config.showLoading) {
      store.dispatch(setLoading(false))
    }
    return response.data;
  }, async function (error) {
    // handle timeout
    if(error.code === "ECONNABORTED") {
      // code logic
      store.dispatch(setErrorCode('ECONNABORTED'))
    }

    // access token expired & refresh token
    {/* 
      - login success -> return access token with 30s 
      - after 30s -> click "Get Authenticate User" -> inject access token -> BE check access token expired -> system auto call api refresh token -> system auto call api "Get Authenticate User"
    */}
    if(error.status = 401) {
      try {
        const refresh_token = window.localStorage.getItem('refresh_token');
        const response: any = await httpRequest('/api/user/refresh-token', {
          method: 'POST',
          data: {
            data: {
              refresh_token
            }
          }
        });
        const access_token = response.data.access_token;
        window.localStorage.setItem('access_token', access_token);
        httpRequest.defaults.headers['x-auth-token'] = access_token;
        return httpRequest(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    // handle error
    switch (error.status) {
      case 404: {
        // dispatch action '404'
        break;
      }
      case 403: {
        // dispatch action '404'
        break;
      }
      case 401: {
        // dispatch action '404'
         break;
      }
      default:
        break
    }
    return Promise.reject(error);
  });
}
