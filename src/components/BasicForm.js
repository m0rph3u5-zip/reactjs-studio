import useInput from '../hooks/use-input';

const BasicForm = () => {
  const simpleValidate = (value) => {
    return value.trim().length > 0;
  };

  const emailValidate = (email) => {
    const emailValidators = ['@', '.'];
    return (
      email.trim().length > 0 &&
      emailValidators.every((crt) => email.includes(crt))
    );
  };

  const {
    value: surnameValue,
    isValid: surnameIsValid,
    valueChangeHander: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    hasError: surnameHasError,
    reset: surnameReset,
  } = useInput(simpleValidate);

  const {
    value: nameValue,
    isValid: nameIsValid,
    valueChangeHander: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput(simpleValidate);

  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHander: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    reset: emailReset,
  } = useInput(emailValidate);

  let formIsValid = surnameIsValid && nameIsValid && emailIsValid;

  const classSurnameControlValid = surnameHasError
    ? 'form-control invalid'
    : 'form-control';

  const classNameControlValid = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const classEmailControlValid = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      formSubmitHandler(e);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (surnameHasError || nameHasError || emailHasError) {
      formIsValid = false;
      return;
    }

    console.info(
      `Dati inviati ==> nominativo: ${nameValue} ${surnameValue}, email: ${emailValue}.`
    );

    surnameReset();
    nameReset();
    emailReset();
    formIsValid = false;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={classSurnameControlValid}>
          <label htmlFor='bf-surname'>Cognome</label>
          <input
            type='text'
            id='bf-surname'
            value={surnameValue}
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
            onKeyDown={keyDownHandler}
            autoComplete='off'
          />
          {surnameHasError && (
            <small className='error-text'>
              Il cognome è un campo richiesto.
            </small>
          )}
        </div>
        <div className={classNameControlValid}>
          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            id='bf-name'
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            onKeyDown={keyDownHandler}
            autoComplete='off'
          />
          {nameHasError && (
            <small className='error-text'>Il nome è un campo richiesto.</small>
          )}
        </div>
      </div>
      <div className={classEmailControlValid}>
        <label htmlFor='bf-email'>E-Mail</label>
        <input
          type='email'
          id='bf-email'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          onKeyDown={keyDownHandler}
          autoComplete='off'
        />
        {emailHasError && (
          <small className='error-text'>L'e-mail è un campo richiesto.</small>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Salva</button>
      </div>
    </form>
  );
};

export default BasicForm;
