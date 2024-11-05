// src/redux/actions/clientActions.js
import { setRoles } from '../reducers/clientReducer';
import axios from 'axios';

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;
    if (roles.length === 0) {
      try {
        const response = await axios.get('/api/roles'); // API yolunu ihtiyaca göre düzenleyin
        dispatch(setRoles(response.data));
      } catch (error) {
        console.error("Failed to fetch roles", error);
      }
    }
  };
};
