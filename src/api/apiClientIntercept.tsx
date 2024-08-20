import axios from 'axios';
import { isTokenExpired, refreshingToken, getCookie } from './token';

const apiClientIntercept = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

apiClientIntercept.interceptors.request.use(
  async (config) => {
    if (isTokenExpired()) {
      try {
        const newAccessToken = await refreshingToken();
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
      } catch (error) {
        return Promise.reject(error);
      }
    } else {
      const accessToken = getCookie('access_token');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClientIntercept;
