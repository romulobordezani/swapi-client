import { FC, ReactNode } from 'react';

import { useAppSelector, useAppDispatch } from 'Host/ReduxHooks';
import { increment, selectCount } from 'Host/SwapiSlice';

import buttonStyle from './Button.style';

export interface ButtonProps {
  children: ReactNode;
  name: string;
}

const Button: FC<ButtonProps> = ({ children, name }) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <button css={buttonStyle} name={name} onClick={() => dispatch(increment())}>
      {children} {count}
    </button>
  );
};

export default Button;
