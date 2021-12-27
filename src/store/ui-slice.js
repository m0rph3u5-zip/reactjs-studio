import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsVisible: false,
  notifyContent: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotify: (state, action) => {
      state.notifyContent = {
        title: action.payload.title,
        content: action.payload.content,
        status: action.payload.status,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
