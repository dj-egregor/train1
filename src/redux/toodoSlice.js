import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const toodosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addToodos: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },

    deleteTodos: {
      reducer(state, { payload }) {
        state.items = state.items.filter(todo => todo.id !== payload);
      },
    },
  },
});

export const { addToodos, deleteTodos } = toodosSlice.actions;
export const toodosReducer = toodosSlice.reducer;
