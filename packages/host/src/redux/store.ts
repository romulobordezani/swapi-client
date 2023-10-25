import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import localStorage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { swapiV2 } from '../services/swapi';
import counterReducer from './features/popular/popular.slice';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage: localStorage
};

const persistedPopularReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  reducer: {
    [swapiV2.reducerPath]: swapiV2.reducer,
    popular: persistedPopularReducer
  },
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(swapiV2.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const persister = persistStore(store);

setupListeners(store.dispatch);
