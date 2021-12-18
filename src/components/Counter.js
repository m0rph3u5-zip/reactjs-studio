import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch({
      type: 'ADD',
    });
  };

  const removeHandler = () => {
    dispatch({
      type: 'REMOVE',
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={addHandler}>Incrementa</button>
        <button onClick={removeHandler}>Decrementa</button>
      </div>
    </main>
  );
};

export default Counter;
