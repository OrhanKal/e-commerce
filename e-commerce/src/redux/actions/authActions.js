// src/redux/actions/authActions.js
import axios from 'axios';
import { setUser } from '../reducers/clientReducer';
import { toast } from 'react-toastify'; // Toast import edildi
import md5 from 'md5';

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post('/login', {
      email: data.email,
      password: data.password,
    });

    if (response.status === 200) {
      const { token, user } = response.data;
      const emailHash = md5(user.email.trim().toLowerCase());
      const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;

      dispatch(setUser({ ...user, avatar: gravatarUrl }));

      if (data.rememberMe) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      return true;
    }
  } catch (error) {
    toast.error('Login failed. Please check your credentials.');
    return false;
  }
};
