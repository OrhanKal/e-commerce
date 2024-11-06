// src/redux/actions/authActions.js
import axiosInstance from '../../utils/axiosInstance';
import { setUser } from '../reducers/clientReducer';
import { toast } from 'react-toastify';
import md5 from 'md5';

export const loginUser = (data) => async (dispatch) => {
    try {
      // '/auth/login' yerine '/login' kullanıyoruz
      const response = await axiosInstance.post('/login', {
        email: data.email,
        password: data.password,
      });
  
      if (response.status === 200) {
        const { token, name, email, role_id } = response.data;
        const emailHash = md5(email.trim().toLowerCase());
        const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;
  
        dispatch(setUser({ name, email, role_id, avatar: gravatarUrl }));
  
        if (data.rememberMe) {
          localStorage.setItem('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }
  
        return true;
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials.');
      return false;
    }
  };