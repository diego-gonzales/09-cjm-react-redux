import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';
import crudReducer from './slices/crudSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shoppingCart: shoppingCartReducer,
    crud: crudReducer
  }
});

// store.subscribe(() => console.log(store));
