import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../Button';

const StyledProducts = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 10px;
  background: white;
  position: relative;
  img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    text-align: right;
    user-select: none;
    pointer-events: none;
    cursor: pointer;
    padding: 2px;
    background: #fafafa;
  }
`;

const StyledDescriptions = styled.div`
  width: 100%;
  display: flex;
  div {
    padding: 0 50px 0 0;
  }
`;

interface PropsI {
  img: string;
  name?: string;
  price?: string | number;
  id?: string | number;
}

const Product: FC<PropsI> = ({ img, name, price, id }) => {
  return (
    <StyledProducts>
      <Link href={`/details`}>
        <img src={img} alt='img' />
      </Link>
      <StyledDescriptions>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
      </StyledDescriptions>
      <div style={{ display: 'flex', position: 'absolute', bottom: '0', margin: '0 0 4px' }}>
        <Button url='/' title='Add to cart' />
        <Button url={`/details/[id]`} asParam={`/details/${id}`} title='Details' />
      </div>
    </StyledProducts>
  );
};

export default Product;
