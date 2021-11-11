import React from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MileItemForm = (props) => {
  const inputConfig = {
    id: 'prezzo',
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  return (
    <form className={classes.form}>
      <Input label='Amount' input={inputConfig} />
      <button>+</button>
    </form>
  );
};

export default MileItemForm;
