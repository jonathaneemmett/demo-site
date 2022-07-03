import { configureStore } from '@reduxjs/toolkit';

// reducer files
import productsReducer from '../reducers/productsReducer';
import authReducer from "../reducers/authReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: authReducer
  },
});
