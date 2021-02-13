import React from 'react';
import {StyledButton, BWrapper} from './views';

interface props {
  title: string;
  callback?: any;
  type?: string | undefined;
}


const Button: React.FC<props> = ({title, type, callback}) => {
  return (
    <BWrapper onClick={callback}>
      <StyledButton type={type}>
        {title}
      </StyledButton>
    </BWrapper>
  );
};

export default Button;