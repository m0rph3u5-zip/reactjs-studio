import { useRef } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions, incrementAsync } from '../store/counter';

const Counter = () => {
  const inputRef = useRef(0);
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(counterActions.increment());
  };

  const removeHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.byAmount(5));
  };

  const showCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const testAsyncHandler = () => {
    dispatch(incrementAsync(+inputRef.current.value));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={addHandler}>Incrementa</button>
        <button onClick={removeHandler}>Decrementa</button>
        <button onClick={increaseHandler}>Step by 5</button>
        <button onClick={testAsyncHandler}>Incrementa (Async)</button>
        <input type='number' name='step' ref={inputRef} />
      </div>
      <button onClick={showCounterHandler}>Toggle Visibility</button>
    </main>
  );
};

export default Counter;
