import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: { value: 0 },
  reducers: {
    incremento: (state) => {
      state.value += 1;
    },
    decremento: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremento, decremento } = countSlice.actions;
export const countReducer = countSlice.reducer;
