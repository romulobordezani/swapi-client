import { FC, ReactNode } from 'react';
export interface ButtonProps {
    children: ReactNode;
    name?: string;
    [key: string]: any;
}
export declare const Button: FC<ButtonProps>;
