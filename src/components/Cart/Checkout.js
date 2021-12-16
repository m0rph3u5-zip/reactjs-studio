import classes from './Checkout.module.css';
import useInput from '../hooks/use-input';

const validateValue = (value) => value.trim().length > 0;
const validateEmail = (value) => {
  const validators = ['@', '.'];
  return validators.every(v => value.contains(value));
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
  } = useInput(validateValue);

  const formIsValid = nameIsValid;

  const confirmHandler = (e) => {
    e.preventDefault();

    console.log('checkout submitted successfull..');
    nameReset();
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
        <div className={classes.control}>
          <label htmlFor='street'>Indirizzo</label>
          <input type='text' id='street' />
        </div>
        <div className={classes.control}>
          <label htmlFor='postal'>CAP</label>
          <input type='text' id='postal' />
        </div>
        <div className={classes.control}>
          <label htmlFor='city'>Citta</label>
          <input type='text' id='city' />
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Annulla
          </button>
          <button className={classes.submit}>Conferma Ordine</button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
