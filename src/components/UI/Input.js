import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, inputRef) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={inputRef} {...props.input} />
    </div>
  );
});

export default Input;
