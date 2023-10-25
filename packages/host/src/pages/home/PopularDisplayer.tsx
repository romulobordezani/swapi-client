import React, { FC } from 'react';
import { CountedResource } from '../../redux/features/popular/types/CountedResource';

export interface PopularDisplayerProps {
  pageView: CountedResource;
}

export const PopularDisplayer: FC<PopularDisplayerProps> = ({ pageView }) => {
  if (!pageView) {
    return null;
  }

  return (
    <li>
      {pageView.resourceType} - {pageView.id} - {pageView.count}
    </li>
  );
};
