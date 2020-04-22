import React, { InputHTMLAttributes } from 'react';

type ButtonProps = InputHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button type="button" {...rest}>
    {children}
  </button>
);

export default Button;
