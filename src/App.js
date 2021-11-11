import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import ReducerLogin from './components/Login/ReducerLogin';

function App() {
  const useRedurerLogin = true;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggerId = localStorage.getItem('userLoggedIn');
    if (userLoggerId === 'true') {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const loginHandler = (email, password) => {
    localStorage.setItem('userLoggedIn', true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('userLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && useRedurerLogin && <ReducerLogin onLogin={loginHandler}/>}
        {!isLoggedIn && !useRedurerLogin && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
