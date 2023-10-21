import { PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
export interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}
export declare const incrementAsync: import("@reduxjs/toolkit").AsyncThunk<number, number, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const counterSlice: import("@reduxjs/toolkit").Slice<CounterState, {
    increment: (state: import("immer/dist/internal").WritableDraft<CounterState>) => void;
    decrement: (state: import("immer/dist/internal").WritableDraft<CounterState>) => void;
    incrementByAmount: (state: import("immer/dist/internal").WritableDraft<CounterState>, action: PayloadAction<number>) => void;
}, "counter">;
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/increment">, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/decrement">, incrementByAmount: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "counter/incrementByAmount">;
export declare const selectCount: (state: RootState) => number;
export declare const incrementIfOdd: (amount: number) => AppThunk;
declare const _default: import("redux").Reducer<CounterState, import("redux").AnyAction>;
export default _default;
