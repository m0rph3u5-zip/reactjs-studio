const redux = require('redux');

const actionType = {
  ADD: 'ADD',
  REDUCE: 'REDUCE',
};

const couterReducer = (state = { counter: 0 }, action) => {
  if (action.type === actionType.ADD) {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === actionType.REDUCE) {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(couterReducer);
const counterSubscriber = () => {
  const count = store.getState();
  console.log(count);
};
store.subscribe(counterSubscriber);
store.dispatch({ type: actionType.ADD });
store.dispatch({ type: actionType.ADD });
store.dispatch({ type: actionType.REDUCE });
