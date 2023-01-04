import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
  ],
  cart: [],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIsAlreadyExists = state.cart.some(
        (item) => item.id === action.payload.id
      );

      if (itemIsAlreadyExists) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    removeOneFromCart: (state, action) => {
      if (action.payload.quantity > 1) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    removeAllFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeOneFromCart,
  removeAllFromCart,
  clearCart
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
