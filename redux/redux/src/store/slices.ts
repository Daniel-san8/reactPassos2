import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
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
export default countSlice.reducer;
