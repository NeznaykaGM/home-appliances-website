import React, { FC, useContext } from 'react';
import Link from 'next/link';
import Button from '@md-ui/button/main';
import { Wrapper, DWrapper, ButtonWrapper } from './views';
import { ProductsBLContext } from '../../layers/businnes/index';

interface PropsI {
  img: string;
  name?: string;
  price?: string | number;
  id?: string | number;
}

const ProductsCard: FC<PropsI> = ({ img, name, price, id }) => {
  const addToCart = useContext(ProductsBLContext);

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
        <Button callback={() => addToCart(id)} url='/' title='Add to cart' />
        <Button url={`/details/[id]`} asParam={`/details/${id}`} title='Details' />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ProductsCard;
