import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const StyledButton = styled.div`
  padding: 8px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #34c759;
  transition: all ease 0.2s;
  a{
    text-decoration: none;
    color: black !important;
  }
  &:hover {
    background: #34c759;
    //transition: all ease 0.2s;
    a{
      color: white !important;
    }
  }
    
`;

interface props {
  title: string;
  url: string;
  callback?: any;
  asParam?: any;
}

const Button: FC<props> = ({ url, title, callback, asParam}) => {
  return (
    <Link href={url} as ={asParam}>
      <StyledButton id={'divButton'}>
          {title}
      </StyledButton>
    </Link>
  );
};

export default Button;
