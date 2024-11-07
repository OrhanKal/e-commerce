// src/utils/axiosInstance.js
import axios from 'axios';
const getToken=()=>localStorage.getItem('token') || sessionStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken()
  },
});

// Interceptor to automatically add the token in Authorization header for each request
/*axiosInstance.interceptors.request.use(
  (config) => {
    const token = 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
*/
export default axiosInstance;
