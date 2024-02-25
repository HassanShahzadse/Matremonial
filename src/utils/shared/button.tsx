// components/Button.tsx
import React from 'react';
import ButtonProps from '../../types/button';
const Button: React.FC<ButtonProps> = ({ children, onClick, css}) => {
  return (
    <button
      className={ `${css}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
