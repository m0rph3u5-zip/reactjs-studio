import { createStore } from 'redux';

const initState = { counter: 0 };
const actionType = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

const counterReducer = (state = initState, action) => {
  if (action.type === actionType.ADD) {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === actionType.REMOVE) {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
