import React, { FC } from 'react';
import Link from 'next/link';
import { Wrapper, DWrapper, ButtonWrapper } from './views';
import Button from '@md-ui/button/main';

interface Props {
  img: string;
  name: string;
  price: number;
  id: number;
  deleteProductFromCart: (id: number) => void;
}

const CardForCart: FC<Props> = ({ deleteProductFromCart, img, name, price, id }) => {
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
        <Button onClick={() => deleteProductFromCart(id)} title={'Delete'} type={'delete'} key={id} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CardForCart;
