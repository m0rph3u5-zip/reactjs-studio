import { useState } from 'react';

const SimpleInput = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const [nameIsTouched, setNameTouched] = useState(false);
  const [emailIsTouched, setEmailTouched] = useState(false);

  const nameIsValid = nameInput.trim().length > 0;
  const nameIsInvalid = !nameIsValid && nameIsTouched;

  const emailValidators = ['@', '.'];
  const emailIsValid = emailInput.trim().length > 0 && emailValidators.some((crt) => emailInput.includes(crt));
  const emailIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = emailIsValid && nameIsValid;

  const nameChangeHander = (e) => {
    setNameInput(e.target.value);
  };

  const emailChangeHander = (e) => {
    setEmailInput(e.target.value);
  };

  const nameBlurHandler = (e) => {
    setNameTouched(true);
  };

  const emailBlurHandler = (e) => {
    setEmailTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);

    if (nameIsInvalid || emailIsInvalid) {
      formIsValid = false;
      return;
    }

    setNameTouched(false);
    setNameInput('');

    setEmailTouched(false);
    setEmailInput('');

    setTimeout(() => {
      formIsValid = false;
    }, 3000);
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      setEmailInput(e.target.value);
      setNameInput(e.target.value);
      formSubmitHandler(e);
    }
  };

  const classNameControlValid = nameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const classEmailControlValid = emailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <span>Valid Form: {formIsValid.toString()}</span>
      <div className={classNameControlValid}>
        <label htmlFor='name'>Il tuo nome</label>
        <input
          type='text'
          id='name'
          value={nameInput}
          onBlur={nameBlurHandler}
          onChange={nameChangeHander}
          onKeyDown={keyDownHandler}
        />
        {nameIsInvalid && (
          <div className='error-text'>Il nome inserito non è valido</div>
        )}
      </div>
      <div className={classEmailControlValid}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHander}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailIsInvalid && <p className='error-text'>La mail non è valida.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={formIsValid.toString()}>Invia</button>
      </div>
    </form>
  );
};

export default SimpleInput;
