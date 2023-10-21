import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import swapiReducer from './slices/swapi/swapiSlice';

export const store = configureStore({
  reducer: {
    swapi: swapiReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
