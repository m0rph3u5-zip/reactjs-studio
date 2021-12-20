import { createStore } from 'redux';
import actionType from '../static/Static';

const initState = {
  counter: 0,
  show: true,
};

const counterReducer = (state = initState, action) => {
  if (action.type === actionType.ADD) {
    return {
      counter: state.counter + action.value,
      show: state.show,
    };
  }
  if (action.type === actionType.REMOVE) {
    return {
      counter: state.counter - action.value,
      show: state.show,
    };
  }
  if (action.type === actionType.SHOW) {
    return {
      counter: state.counter,
      show: action.show,
    };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
