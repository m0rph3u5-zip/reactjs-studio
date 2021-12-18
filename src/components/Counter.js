import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch({
      type: 'ADD',
      value: 1,
    });
  };

  const removeHandler = () => {
    dispatch({
      type: 'REMOVE',
      value: 2,
    });
  };

  const showCounterHandler = () => {
    dispatch({
      type: 'SHOW',
      show: !show,
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={addHandler}>Incrementa</button>
        <button onClick={removeHandler}>Decrementa</button>
      </div>
      <button onClick={showCounterHandler}>Toggle Visibility</button>
    </main>
  );
};

export default Counter;
