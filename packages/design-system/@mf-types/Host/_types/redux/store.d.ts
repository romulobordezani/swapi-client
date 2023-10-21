import { ThunkAction, Action } from '@reduxjs/toolkit';
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    swapi: import("./slices/swapi/swapiSlice").CounterState;
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    swapi: import("./slices/swapi/swapiSlice").CounterState;
}, import("redux").AnyAction, undefined>]>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
