import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const StyledButton = styled.div`
  a {
    text-decoration: none;
    color: black !important;
    padding: 8px;
    border-radius: 20px;
    border: 1px solid #34c759;
    transition: all ease 0.2s;
  }
  a:hover {
    background: #34c759;
    //transition: all ease 0.2s;
    color: white !important;
  }
`;

interface props {
  title: string;
  url: string;
  callback?: any;
}

const Button: FC<props> = ({ url, title, callback}) => {
  return (
    <StyledButton>
      <Link href={url}>
        {title}
      </Link>
    </StyledButton>
  );
};

export default Button;
