import { createSlice } from '@reduxjs/toolkit';
import plants from './plants';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {

    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      console.log(state.items);
    },

    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name );
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      if(quantity < 1){
        return
      }
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
