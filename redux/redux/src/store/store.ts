import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './slices';
import { loginReducer } from './login';

export const store = configureStore({
  reducer: {
    count: countReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
