import { configureStore } from '@reduxjs/toolkit';
import { toodosReducer } from './toodoSlice';

export const store = configureStore({
  reducer: {
    todos: toodosReducer,
  },
});
