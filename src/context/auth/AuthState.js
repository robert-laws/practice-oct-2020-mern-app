import React, { useReducer, useCallback } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { LOGIN, LOGOUT } from '../types';

const AuthState = ({ children }) => {
  const initialState = {
    isLoggedIn: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = useCallback(() => {
    try {
      dispatch({ type: LOGIN });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const logout = useCallback(() => {
    try {
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
