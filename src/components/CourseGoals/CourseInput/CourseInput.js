import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import Style from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${Style['form-control']} ${ !isValid && Style.invalid }`}>
        <label style={{ color: !isValid ? 'red' : 'black' }}>
          Course Goal
        </label>
        <input type="text"
          onChange={goalInputChangeHandler}
          style={{ border: !isValid ? '1px solid red' : '1px solid black' }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
