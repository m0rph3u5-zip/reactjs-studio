import { Fragment } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import configData from '../../env/config.json';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(
        `${configData.serverUrl}${configData.menu.enpoint}`
      );

      if (!response.ok) {
        console.error(response.status);
        setError(true);
      }
      const data = await response.json();

      const loadedMenu = [];
      for (const key in data) {
        loadedMenu.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMenu(loadedMenu);
      setLoading(false);
    };

    getData();
  }, []);

  const loadingUI = (
    <Fragment>
      {loading && !error && <div>Caricamento dati in corso...</div>}
    </Fragment>
  );

  const errorUI = (
    <Fragment>
      {error && <div>Impossibile caricare i dati. Riprova più tardi!</div>}
    </Fragment>
  );

  const mealsList = (
    <Fragment>
      {!loading &&
        !error &&
        menu.map((item) => (
          <MealItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
    </Fragment>
  );

  return (
    <section className={classes.meals}>
      <Card>
        {loadingUI}
        {errorUI}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
