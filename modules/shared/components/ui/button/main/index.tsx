import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.div`
  max-height: 100px;
  max-width: 100px;
  padding: 8px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #34c759;
  transition: all ease 0.2s;
  a {
    text-decoration: none;
    color: black !important;
  }
  &:hover {
    background: #34c759;
    //transition: all ease 0.2s;
    color: white !important;
  }
`;
const BWrapper = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;
`

interface props {
  title: string;
  url: string;
  callback?: any;
  asParam?: string;
}

const Button: FC<props> = ({ url, title, callback, asParam }) => {
  return (
    <BWrapper onClick={callback}>
        <Link href={url} as={asParam}>
          <StyledButton>{title}</StyledButton>
        </Link>
    </BWrapper>
  );
};

export default Button;
