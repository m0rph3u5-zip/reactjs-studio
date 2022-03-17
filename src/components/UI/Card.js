import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${classes.bgBlur}`}>
      <h1>{props.text}</h1>
      {props.children}
    </div>
  );
};

export default Card;
