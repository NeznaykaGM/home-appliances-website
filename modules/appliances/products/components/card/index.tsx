import React, { FC } from 'react';
import Link from 'next/link';
import Button from '@md-ui/button/main';
import { StyledProducts, StyledDescriptions, ButtonWrapper } from './views';

interface PropsI {
  img: string;
  name?: string;
  price?: string | number;
  id?: string | number;
}

const ProductsCard: FC<PropsI> = ({ img, name, price, id }) => {
  return (
    <StyledProducts>
      <Link href={`/details`}>
        <img src={img} alt='img' />
      </Link>
      <StyledDescriptions>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
      </StyledDescriptions>
      <ButtonWrapper>
        <Button url='/' title='Add to cart' />
        <Button url={`/details/[id]`} asParam={`/details/${id}`} title='Details' />
      </ButtonWrapper>
    </StyledProducts>
  );
};

export default ProductsCard;
