import React, { FC } from 'react';
import Link from 'next/link';
import { Wrapper, DWrapper, ButtonWrapper } from './views';
import Button from '@md-ui/button/main';

interface PropsI {
  img: string;
  name?: string;
  price?: string | number;
  id?: string | number;
}

const CardForCart: FC<PropsI> = ({ img, name, price, id }) => {
  return (
    <Wrapper>
      <Link href={`/details`}>
        <img src={img} alt='img' />
      </Link>
      <DWrapper>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
      </DWrapper>
      <ButtonWrapper>
        <Button title={"Delete"} type={'delete'}/>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CardForCart;
