import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shoppingCart: shoppingCartReducer,
  },
});

// store.subscribe(() => console.log(store));
