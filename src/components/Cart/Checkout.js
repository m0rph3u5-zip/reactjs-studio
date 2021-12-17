import classes from './Checkout.module.css';
import useInput from '../hooks/use-input';

const validateValue = (value) => value.trim().length > 0;
const validateCap = (value) => value.trim().length === 5;
const validateEmail = (value) => {
  const validators = ['@', '.'];
  return (
    value.trim().length > 0 && validators.every((crt) => value.includes(crt))
  );
};

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetHandler: nameReset,
  } = useInput(validateValue);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailReset,
  } = useInput(validateEmail);

  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressIsInvalid,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    resetHandler: addressReset,
  } = useInput(validateValue);

  const {
    value: capValue,
    isValid: capIsValid,
    hasError: capIsInvalid,
    valueChangeHandler: capChangeHandler,
    inputBlurHandler: capBlurHandler,
    resetHandler: capReset,
  } = useInput(validateCap);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityIsInvalid,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    resetHandler: cityReset,
  } = useInput(validateValue);

  const formIsValid =
    nameIsValid && emailIsValid && cityIsValid && capIsValid && addressIsValid;

  const resetForm = () => {
    nameReset();
    addressReset();
    emailReset();
    cityReset();
    capReset();
  };

  const confirmHandler = async (e) => {
    e.preventDefault();

    if (
      cityIsInvalid ||
      capIsInvalid ||
      addressIsInvalid ||
      emailIsInvalid ||
      nameIsInvalid
    ) {
      formIsValid = false;
      return;
    }

    const formData = {
      name: nameValue,
      email: emailValue,
      address: addressValue,
      city: cityValue,
      cap: capValue,
    };
    await props.onConfirm(formData);
    resetForm();
  };

  const nameControlClass = `${classes.control} ${
    nameIsInvalid ? classes.invalid : ''
  }`;

  const emailControlClass = `${classes.control} ${
    emailIsInvalid ? classes.invalid : ''
  }`;

  const addressControlClass = `${classes.control} ${
    addressIsInvalid ? classes.invalid : ''
  }`;

  const capControlClass = `${classes.control} ${
    capIsInvalid ? classes.invalid : ''
  }`;

  const cityControlClass = `${classes.control} ${
    cityIsInvalid ? classes.invalid : ''
  }`;

  return (
    <>
      <hr />
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClass}>
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
        <div className={emailControlClass}>
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
        <div className={addressControlClass}>
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
        <div className={capControlClass}>
          <label htmlFor='cap'>CAP</label>
          <input
            type='text'
            minLength={5}
            maxLength={5}
            id='cap'
            value={capValue}
            onChange={capChangeHandler}
            onBlur={capBlurHandler}
            autoComplete='off'
          />
          {capIsInvalid && <small>Campo richiesto</small>}
        </div>
        <div className={cityControlClass}>
          <label htmlFor='city'>Città</label>
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
