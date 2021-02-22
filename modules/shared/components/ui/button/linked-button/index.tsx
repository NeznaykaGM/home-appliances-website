import React, { FC } from 'react';
import Link from 'next/link';
import { Button, BWrapper } from './views';

interface Props {
  title: string;
  url: string;
  onClick?: () => void;
  asParam?: string;
}

const LButton: FC<Props> = ({ url, title, onClick, asParam }) => {
  return (
    <BWrapper onClick={onClick}>
      <Link href={url} as={asParam}>
        <Button>{title}</Button>
      </Link>
    </BWrapper>
  );
};

export default LButton;
