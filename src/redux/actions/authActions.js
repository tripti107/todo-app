export const loginUser = (credentials, onSuccess) => async (dispatch) => {
    try {
      // Mock authentication
      if (credentials.username === 'user' && credentials.password === 'password') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { username: credentials.username }
        });
        onSuccess();
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.message
      });
    }
  };
  
  export const logoutUser = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
  };