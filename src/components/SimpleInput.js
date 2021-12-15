import useInput from '../hooks/use-input';

const SimpleInput = () => {
  const validateName = (value) => {
    console.log(value);
    return value.trim().length > 0;
  };

  const validateEmail = (value) => {
    const emailValidators = ['@', '.'];
    return (
      value.trim().length > 0 &&
      emailValidators.every((crt) => value.includes(crt))
    );
  };

  const {
    value: nameInput,
    isValid: nameIsValid,
    hasError: nameIsInvalid,
    valueChangeHander: nameChangeHander,
    inputBlurHandler: nameBlurHandler,
    reset: nameValueReset,
  } = useInput(validateName);

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHander: emailChangeHander,
    inputBlurHandler: emailBlurHandler,
    reset: emailValueReset,
  } = useInput(validateEmail);

  let formIsValid = emailIsValid && nameIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (nameIsInvalid || emailIsInvalid) {
      formIsValid = false;
      return;
    }

    nameValueReset();
    emailValueReset();

    setTimeout(() => {
      formIsValid = false;
    }, 3000);
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      formSubmitHandler(e);
      console.info(`Dati inviati: name: ${nameInput}, email: ${emailInput}.`);
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
      <div className={classNameControlValid}>
        <label htmlFor='name'>Nominativo</label>
        <input
          type='text'
          id='name'
          value={nameInput}
          autoComplete='off'
          onBlur={nameBlurHandler}
          onChange={nameChangeHander}
          onKeyDown={keyDownHandler}
        />
        {nameIsInvalid && (
          <small className='error-text'>Il nome inserito non è valido</small>
        )}
      </div>
      <div className={classEmailControlValid}>
        <label htmlFor='email'>E-Mail</label>
        <input
          type='email'
          id='email'
          value={emailInput}
          autoComplete='off'
          onChange={emailChangeHander}
          onBlur={emailBlurHandler}
          onKeyDown={keyDownHandler}
        />
        {emailIsInvalid && (
          <small className='error-text'>La mail non è valida.</small>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Salva</button>
      </div>
    </form>
  );
};

export default SimpleInput;
