import { FC, ReactNode } from 'react';
import React from 'react';

import { useAppSelector, useAppDispatch } from 'Host/ReduxHooks';
import { increment, selectCount } from 'Host/SwapiSlice';

export interface ButtonProps {
  children: ReactNode;
  name: string;
}

const Button: FC<ButtonProps> = ({ children, name }) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <button name={name} onClick={() => dispatch(increment())}>
      <>
        {children} {count}
      </>
    </button>
  );
};

export default Button;
