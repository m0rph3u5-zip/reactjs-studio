import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>
        Ordina quello che desideri, al resto pensiamo noi!
      </h2>
      <p>
        Puoi selezionare la quantità di ciascun piatto e aggiungerlo al carrello.<br />
        Inotra l&apos;ordine dirattamente in cucina, sarà pronto in men che non si dica!
      </p>
    </section>
  );
};

export default MealsSummary;
