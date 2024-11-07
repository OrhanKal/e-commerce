// src/redux/actions/authActions.js
import axiosInstance from '../../utils/axiosInstance';
import { setUser } from '../reducers/clientReducer';
import { toast } from 'react-toastify';
import md5 from 'md5';

export const loginUser = (data) => async (dispatch) => {
    try {
      const response = await axiosInstance.post('/login', {
        email: data.email,
        password: data.password,
      });
  
      if (response.status === 200) {
        const { token, name, email, role_id } = response.data;
        const emailHash = md5(email.trim().toLowerCase());
        const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;
  
        dispatch(setUser({ name, email, role_id, avatar: gravatarUrl }));
  
        // Token'ı kaydetmeden önce kontrol
        console.log("Token kaydediliyor:", token);
  
        if (data.rememberMe) {
          localStorage.setItem('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }
  
        // Token kaydedildikten sonra kontrol
        console.log("localStorage'daki token:", localStorage.getItem('token'));
        console.log("sessionStorage'daki token:", sessionStorage.getItem('token'));
  
        return true;
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials.');
      return false;
    }
  };

// Kullanıcı oturumunu kontrol eden işlev
export const checkAuth = () => async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      
      // Token kontrolü
      console.log("checkAuth sırasında token:", token);
      
      if (token) {
        const response = await axiosInstance.get("/verify");
        
        if (response.status === 200) {
          const { name, email, role_id } = response.data;
          const emailHash = md5(email.trim().toLowerCase());
          const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;
  
          dispatch(setUser({ name, email, role_id, avatar: gravatarUrl }));
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Auth check error:', error);
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      dispatch(setUser({}));
      return false;
    }
  };

// Kullanıcı çıkış işlemi
export const logout = () => (dispatch) => {
  try {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    dispatch(setUser({}));
    toast.success('Logged out successfully');
  } catch (error) {
    console.error('Logout error:', error);
    toast.error('Logout failed');
  }
};
