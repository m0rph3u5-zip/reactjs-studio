import React, { useState } from 'react';

const initialState = {
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};
const AuthContext = React.createContext(initialState);

export const AuthContextProvide = (props) => {
  const [token, setToken] = useState('');

  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken('');
  };

  const contextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
