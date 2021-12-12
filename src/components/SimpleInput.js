import { useState, useEffect } from 'react';

const SimpleInput = () => {
  const [validName, setValidName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [nameIsTouched, setNameTouched] = useState(false);

  const nameIsValid = nameInput.trim().length > 0;
  const nameIsInvalid = !nameIsValid && nameIsTouched;

  const nameChangeHander = (e) => {
    setNameInput(e.target.value);
  };

  const nameBlurHandler = (e) => {
    setNameTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (nameIsInvalid) {
      return;
    }

    setValidName(e.target.value);
    setNameTouched(false);
    setNameInput('');

    setTimeout(() => {
      setValidName('');
    }, 1000);
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      setNameInput(e.target.value);
      formSubmitHandler(e);
    }
  };

  const classFormControlValid =
    nameIsInvalid && nameIsTouched ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classFormControlValid}>
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
      {validName.trim().length > 0 && (
        <div>Il nome inserito è: {validName}</div>
      )}
      <div className='form-actions'>
        <button>Invia</button>
      </div>
    </form>
  );
};

export default SimpleInput;
