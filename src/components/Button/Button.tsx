import React, { ReactNode } from 'react';
export interface ButtonProps {
  varient?: string;
  backgroundColor?: string;
  size?:string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  backgroundColor,
  varient,
  size,
  children,
  ...props
}:ButtonProps) => {
  const mode = `button--${varient}`;
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;