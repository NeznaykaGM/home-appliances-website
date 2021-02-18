import React from 'react';
import { BWrapper, StyledButton } from './views';

interface props {
  title: string;
  onClick?: any;
  type?: string | undefined;
}

const Button: React.FC<props> = ({ title, type, onClick }) => {
  return (
    <BWrapper onClick={onClick}>
      <StyledButton type={type}>{title}</StyledButton>
    </BWrapper>
  );
};

export default Button;
