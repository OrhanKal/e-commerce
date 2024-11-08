// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Her istek öncesinde token eklemek için bir request interceptor ekleyelim
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token; // `Bearer` eklenmeden doğrudan token kullanılıyor
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
