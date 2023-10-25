import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CountedResource } from './types/CountedResource';
import { getIdFromUrl } from 'DesignSystem/Utils';

export interface PopularCounter {
  views: CountedResource[];
}

const initialState: PopularCounter = { views: [] };

export const counterSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    countPageView: (state, action: PayloadAction<Pick<CountedResource, 'resourceType' | 'resource'>>) => {
      const currentView = state.views.find((view) => view.resource.url === action.payload.resource.url);

      const view: CountedResource = {
        ...action.payload,
        id: getIdFromUrl(action.payload.resource.url),
        count: currentView ? Number(currentView?.count) + 1 : 1
      };

      if (!currentView) {
        state.views.push(view);
        return;
      }

      currentView.count = view.count;
    }
  }
});

export const { countPageView } = counterSlice.actions;

export default counterSlice.reducer;
