import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todosSlice = createSlice({
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

export const { addToodos, deleteTodos } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
