export const setUser = (user) => ({ type: 'SET_USER', payload: user });
export const setRoles = (roles) => ({ type: 'SET_ROLES', payload: roles });
export const setTheme = (theme) => ({ type: 'SET_THEME', payload: theme });
export const setLanguage = (language) => ({ type: 'SET_LANGUAGE', payload: language });

// Thunk action creator for fetching roles
export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;
    if (roles.length === 0) {
      try {
        const response = await fetch('/api/roles'); // API yolunu ihtiyaca göre düzenleyin
        const data = await response.json();
        dispatch(setRoles(data));
      } catch (error) {
        console.error("Failed to fetch roles", error);
      }
    }
  };
};