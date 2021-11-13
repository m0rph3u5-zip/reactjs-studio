import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const MENU = [
  {
    id: 'm1',
    name: 'Pasta al Pomodoro',
    description: 'Ingredienti: spaghetti n.7, passata di pomodoro, parmigiano reggiano dop (30 mesi)',
    price: 5,
  },
  {
    id: 'm2',
    name: 'Carbonara',
    description: 'Ingredienti: spaghetti n.7, uova, guanciale, parmigiano reggiano dop (30 mesi)',
    price: 8,
  },
  {
    id: 'm3',
    name: 'Cacio e Pepe',
    description: 'Ingredienti: spaghetti n.7, caciocavallo podolico, pepe',
    price: 5,
  },
  {
    id: 'm4',
    name: 'Pasta al pesto',
    description: 'Ingredienti: trofie, pesto (basilico, aglio, parmigianno, olio evo)',
    price: 4,
  },
];

const AvailableMeals = () => {
  const mealsList = MENU.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
