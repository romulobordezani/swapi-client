import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { swapiV2 } from '../services/swapi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [swapiV2.reducerPath]: swapiV2.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swapiV2.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

setupListeners(store.dispatch);
