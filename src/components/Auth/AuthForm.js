import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const emailValidation = (email) => email && ['@', '.'].includes();
const passwordValidation = (password) => password && password.length > 8;

const AuthForm = () => {
  const userEmail = useRef();
  const userPassword = useRef();

  const [formInvalid, setFormValidation] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const email = userEmail.current.value;
    const password = userPassword.current.value;
    if (!emailValidation(email) || !passwordValidation(password)) {
      console.log('form is invalid');
      setFormValidation(true);
      console.log(formInvalid);
      return;
    }
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
            className={`${formInvalid ? 'error' : ''}`}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={userPassword} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
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
