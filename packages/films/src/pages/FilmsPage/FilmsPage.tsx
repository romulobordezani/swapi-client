import React from 'react';
import ButtonProps from '@dsTypes/Button';

const Button = React.lazy(async () => import('DesignSystem/Button')) as typeof ButtonProps;

export const FilmsPage = () => {
  return (
    <div>
      Films Page
      <Button name="remote-button">Works! 🍀</Button>
    </div>
  );
};

export default FilmsPage;
