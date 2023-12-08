import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './src/redux/CartSlice';
import HistoryReducer from './src/redux/HistorySlice';

const store = configureStore({
  reducer: {
    cart: CartReducer,
    history: HistoryReducer,
  },
});

export default store;
