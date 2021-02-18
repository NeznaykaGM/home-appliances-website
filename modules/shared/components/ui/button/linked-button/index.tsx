import React, { FC } from 'react';
import Link from 'next/link';
import { StyledButton, BWrapper } from './views';

interface Props {
  title: string;
  url: string;
  onClick?: any;
  asParam?: string;
}

const LButton: FC<Props> = ({ url, title, onClick, asParam }) => {
  return (
    <BWrapper onClick={onClick}>
      <Link href={url} as={asParam}>
        <StyledButton>{title}</StyledButton>
      </Link>
    </BWrapper>
  );
};

export default LButton;
