import { FC, ReactNode } from 'react';
import buttonStyle from './Button.style';

export interface ButtonProps {
  children: ReactNode;
  name?: string;
  [key: string]: any;
}

const Button: FC<ButtonProps> = ({ children, name, ...props }) => {
  return (
    <button css={buttonStyle} name={name} {...props}>
      {children}
    </button>
  );
};

export default Button;
