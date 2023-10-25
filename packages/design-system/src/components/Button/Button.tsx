import { FC, ReactNode } from 'react';
import buttonStyle from './Button.style';

export interface ButtonProps {
  children: ReactNode;
  name?: string;
  [key: string]: any;
}

export const Button: FC<ButtonProps> = ({ children, name, ...props }) => {
  return (
    <button css={buttonStyle} name={name} {...props} role="button" aria-pressed="false">
      {children}
    </button>
  );
};
