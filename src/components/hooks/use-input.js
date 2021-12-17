import { useReducer } from 'react';

const ActionType = {
  BLUR: 'BLUR',
  INPUT: 'INPUT',
  RESET: 'RESET',
};

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === ActionType.INPUT) {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === ActionType.BLUR) {
    return { value: state.value, isTouched: action.value };
  }
  if (action.type === ActionType.RESET) {
    return initialInputState;
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueChangeHandler = (e) => {
    dispatch({ type: ActionType.INPUT, value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: ActionType.BLUR, value: true });
  };

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const resetHandler = () => {
    dispatch({ type: ActionType.RESET });
    dispatch({ type: ActionType.RESET });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetHandler,
  };
};

export default useInput;
