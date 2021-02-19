import React from 'react';
import { BWrapper, WButton } from './views';

interface props {
  title: string;
  onClick?: any;
  type?: string | undefined;
}

const Button: React.FC<props> = ({ title, type, onClick }) => {
  return (
    <BWrapper onClick={onClick}>
      <WButton type={type}>{title}</WButton>
    </BWrapper>
  );
};

export default Button;
