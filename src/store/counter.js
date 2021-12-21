import { createSlice } from '@reduxjs/toolkit';

const countInit = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: countInit,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    byAmount: (state, action) => {
      state.counter += action.payload;
    },
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(counterSlice.actions.byAmount(amount));
  }, 1000);
};

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
