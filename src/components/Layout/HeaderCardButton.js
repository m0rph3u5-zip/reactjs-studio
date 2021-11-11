import React from "react";

import classes from './HeaderCardButton.module.css';
import CartIcon from "../Cart/CartIcon";

const HeaderCardButton = () => {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span>
        Il Tuo Carrello
      </span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  )
}

export default HeaderCardButton;