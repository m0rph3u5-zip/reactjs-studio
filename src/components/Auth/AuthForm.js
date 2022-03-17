import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const passwordValidation = (password) =>
  password && password.trim().length >= 8;
const emailValidation = (value) => {
  const emailValidators = ['@', '.'];
  return (
    value.trim().length > 0 &&
    emailValidators.every((crt) => value.includes(crt))
  );
};

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const userEmail = useRef();
  const userPassword = useRef();

  const [formInvalid, setFormValidation] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [onFetch, setOnFetch] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const email = userEmail.current.value;
    const password = userPassword.current.value;
    if (!emailValidation(email) || !passwordValidation(password)) {
      setFormValidation(true);
      return;
    }

    setOnFetch(true);
    let url = 'https://identitytoolkit.googleapis.com/v1/';
    if (isLogin) {
      url = `${url}accounts:signInWithPassword?key=AIzaSyAop4oAk98yhh8rm0_PZgNHeMeN4jXPhHw`;
    } else {
      url = `${url}accounts:signUp?key=AIzaSyAop4oAk98yhh8rm0_PZgNHeMeN4jXPhHw`;
    }
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureCode: true,
      }),
    })
      .then((response) => {
        setOnFetch(false);
        if (response.ok) {
          return response.json();
        } else {
          response.json().then((error) => {
            let errorMessage = 'Autentication failed!';
            if (error && error.error && error.error.message) {
              errorMessage = error.error.message;
            }
            alert(errorMessage);
            console.error(error);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/');
      })
      .catch((error) => {
        alert(error);
      });
    console.log(formInvalid);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            required
            ref={userEmail}
            className={`${formInvalid ? classes.error : ''}`}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            minLength='7'
            required
            ref={userPassword}
            className={`${formInvalid ? classes.error : ''}`}
          />
        </div>
        <div className={classes.actions}>
          {!onFetch && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {onFetch && (
            <span>{isLogin ? 'Login request...' : 'Pending request...'}</span>
          )}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
