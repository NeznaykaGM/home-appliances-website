import React, { FC, useContext } from 'react';
import Link from 'next/link';
import LButton from '@md-ui/button/linked-button';
import Button from '@md-ui/button/main';
import { Wrapper, DWrapper, ButtonWrapper, DWrapperName } from './views';
import { ProductsBLContext } from '../../layers/businnes/index';

interface Props {
  img: string;
  name: string;
  price: number;
  id: number;
}

const ProductsCard: FC<Props> = ({ img, name, price, id }) => {
  const { addToCart } = useContext(ProductsBLContext);
  return (
    <Wrapper>
      <Link href={`/details`}>
        <img src={img} alt='img' />
      </Link>
      <DWrapper>
        <DWrapperName>Name: {name}</DWrapperName>
        <div>Price: {price}</div>
      </DWrapper>
      <ButtonWrapper>
        <Button onClick={() => addToCart(id)} title='Add to cart' />
        <LButton url={`/details/[id]`} asParam={`/details/${id}`} title='Details' />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ProductsCard;
