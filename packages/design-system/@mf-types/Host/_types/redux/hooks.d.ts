import { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
declare const _default: {
    useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
        swapi: import("./slices/swapi/swapiSlice").CounterState;
    }, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
    useAppSelector: TypedUseSelectorHook<{
        swapi: import("./slices/swapi/swapiSlice").CounterState;
    }>;
};
export default _default;
