import React, { FC } from 'react';
import Link from 'next/link';
import { StyledButton, BWrapper } from './views';

interface Props {
  title: string;
  url: string;
  callback?: any;
  asParam?: string;
}

const LButton: FC<Props> = ({ url, title, callback, asParam }) => {
  return (
    <BWrapper onClick={callback}>
      <Link href={url} as={asParam}>
        <StyledButton>{title}</StyledButton>
      </Link>
    </BWrapper>
  );
};

export default LButton;
