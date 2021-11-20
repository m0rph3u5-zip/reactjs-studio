import React from "react";
import classes from './ButtonStatic.module.css';

const ButtonStatic = (props) => {
  console.log('button static rendered');
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default React.memo(ButtonStatic)