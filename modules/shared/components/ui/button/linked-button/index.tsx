import React, { FC } from 'react';
import Link from 'next/link';
import {StyledButton, BWrapper} from './views'

interface props {
  title: string;
  url: string;
  callback?: any;
  asParam?: string;
}

const LButton: FC<props> = ({ url, title, callback, asParam }) => {
  return (
    <BWrapper onClick={callback}>
        <Link href={url} as={asParam}>
          <StyledButton>{title}</StyledButton>
        </Link>
    </BWrapper>
  );
};

export default LButton;
