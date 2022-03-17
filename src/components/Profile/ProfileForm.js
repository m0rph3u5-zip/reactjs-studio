import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const newPassword = passwordRef.current.value;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAop4oAk98yhh8rm0_PZgNHeMeN4jXPhHw`;
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPassword,
        returnSecureToken: false,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then((data) => {
            throw new Error(data);
          });
        }
      })
      .then((data) => {
        console.log(data);
        history.replace('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          type='password'
          id='new-password'
          minLength='7'
          ref={passwordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
