import { useState } from 'react';

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false)

  const nameChangeHander = (e) => {
    setNameInput(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (nameInput.trim.length <= 0) {
      return;
    }
    console.log(nameInput);
    setNameInput('');
  };
  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      setNameInput(e.target.value);
      formSubmitHandler(e);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Il tuo nome</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHander}
          onKeyDown={keyDownHandler}
        />
      </div>
      <div className='form-actions'>
        <button>Invia</button>
      </div>
    </form>
  );
};

export default SimpleInput;
