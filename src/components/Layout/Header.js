import React from "react";

import HeaderCardButton from "./HeaderCardButton";
import imageBackground from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>
          React Menu APP
        </h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={imageBackground} alt="immagine di sfondo" />
      </div>
    </React.Fragment>
  )
}

export default Header;