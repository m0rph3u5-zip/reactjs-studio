import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from '../store/ui-slice';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const currentItem = action.payload;
      const existItem = state.items.find((i) => i.id === currentItem.id);
      state.totalQuantity++;
      if (!existItem) {
        state.items.push({
          id: currentItem.id,
          price: currentItem.price,
          quantity: 1,
          totalPrice: currentItem.price,
          name: currentItem.title,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice = existItem.price * existItem.quantity;
      }
    },
    removeItemFromCart: (state, action) => {
      const idItem = action.payload;
      const existItem = state.items.find((i) => i.id === idItem);
      if (!existItem) {
        return;
      }

      state.totalQuantity--;
      if (existItem && existItem.quantity > 1) {
        existItem.quantity--;
        existItem.totalPrice = existItem.price * existItem.quantity;
      } else {
        state.items = state.items.filter((i) => i.id !== idItem);
      }
    },
  },
});

// const sendData = (cartData) => async (dispatch) => {
//   dispatch(uiActions.showNotify({

//   }));
// };

export const cartActions = cartSlice.actions;
export default cartSlice;
