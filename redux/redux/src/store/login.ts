import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from './store';

const login = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchToken = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart());
    const response = await fetch('aaaa');
    const json = await response.json();
    return dispatch(fetchSuccess(json));
  } catch (error: unknown) {
    if (error instanceof Error) return dispatch(fetchError(error.message));
  }
};

export const { fetchStart, fetchSuccess, fetchError } = login.actions;
export const loginReducer = login.reducer;
