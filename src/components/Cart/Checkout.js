import classes from './Checkout.module.css';
import useInput from '../hooks/use-input';

const validateValue = (value) => value.trim().length > 0;
const validateEmail = (value) => {
  const validators = ['@', '.'];
  return (
    value.trim().length > 0 && validators.every((crt) => email.includes(crt))
  );
};

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameIsInvalid,
    reset: nameReset,
  } = useInput(validateValue);

  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailIsInvalid,
    reset: emailReset,
  } = useInput(validateEmail);

  const {
    value: addressValue,
    isValid: addressIsValid,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    hasError: addressIsInvalid,
    reset: addressReset,
  } = useInput(validateValue);

  const {
    value: capValue,
    isValid: capIsValid,
    valueChangeHandler: capChangeHandler,
    inputBlurHandler: capBlurHandler,
    hasError: capIsInvalid,
    reset: capReset,
  } = useInput(validateValue);

  const {
    value: cityValue,
    isValid: cityIsValid,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    hasError: cityIsInvalid,
    reset: cityReset,
  } = useInput(validateValue);

  const formIsValid = nameIsValid && emailIsValid && cityIsValid && capIsValid && addressIsValid && capReset;

  const resetForm = () => {
    nameReset();
    addressReset();
    emailReset();
    cityReset();
  };

  const confirmHandler = (e) => {
    e.preventDefault();

    console.log('checkout submitted successfull..');
    resetForm();
  };

  return (
    <>
      <hr />
      <form className={classes.form} onSubmit={confirmHandler}>
        <div
          className={`${classes.control} ${
            nameIsInvalid ? classes.invalid : ''
          }`}
        >
          <label htmlFor='name'>Nominativo</label>
          <input
            type='text'
            id='name'
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            autoComplete='off'
          />
          {nameIsInvalid && <small>Campo richiesto</small>}
        </div>
        <div
          className={`${classes.control} ${
            emailIsInvalid ? classes.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='text'
            id='email'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            autoComplete='off'
          />
          {emailIsInvalid && <small>Campo richiesto</small>}
        </div>
        <div
          className={`${classes.control} ${
            addressIsInvalid ? classes.invalid : ''
          }`}
        >
          <label htmlFor='address'>Indirizzo</label>
          <input
            type='text'
            id='address'
            value={addressValue}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            autoComplete='off'
          />
          {addressIsInvalid && <small>Campo richiesto</small>}
        </div>
        <div
          className={`${classes.control} ${
            capIsInvalid ? classes.invalid : ''
          }`}
        >
          <label htmlFor='cap'>CAP</label>
          <input
            type='text'
            id='cap'
            value={capValue}
            onChange={capChangeHandler}
            onBlur={capBlurHandler}
            autoComplete='off'
          />
          {capIsInvalid && <small>Campo richiesto</small>}
        </div>
        <div
          className={`${classes.control} ${
            cityIsInvalid ? classes.invalid : ''
          }`}
        >
          <label htmlFor='city'>Citta</label>
          <input
            type='text'
            id='city'
            value={cityValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            autoComplete='off'
          />
          {cityIsInvalid && <small>Campo richiesto</small>}
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Annulla
          </button>
          <button className={classes.submit} disabled={!formIsValid}>
            Conferma Ordine
          </button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
