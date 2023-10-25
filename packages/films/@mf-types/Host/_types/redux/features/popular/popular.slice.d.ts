import type { PayloadAction } from '@reduxjs/toolkit';
import { CountedResource } from './types/CountedResource';
export interface PopularCounter {
    views: CountedResource[];
}
export declare const counterSlice: import("@reduxjs/toolkit").Slice<PopularCounter, {
    countPageView: (state: import("immer/dist/internal").WritableDraft<PopularCounter>, action: PayloadAction<Pick<CountedResource, 'resourceType' | 'resource'>>) => void;
}, "popular">;
export declare const countPageView: import("@reduxjs/toolkit").ActionCreatorWithPayload<Pick<CountedResource, "resource" | "resourceType">, "popular/countPageView">;
declare const _default: import("redux").Reducer<PopularCounter, import("redux").AnyAction>;
export default _default;
