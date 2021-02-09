import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../Button';
import { string } from 'prop-types';

const StyledProducts = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Параметры тени */
  padding: 10px;
  margin: 10px;
  background: white;

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

interface props {
  img: string;
  name?: string;
  price?: string | number;
  id?: string | number;
}

const Products = ({ img, name, price, id }: props) => {
  return (
    <StyledProducts>
      <Link href={`/details`}>
        <img src={img} alt='img' />
      </Link>
      <StyledDescriptions>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
      </StyledDescriptions>
      <div style={{ display: 'flex', position: 'absolute', bottom: '30px' }}>
        <Button url='/' title='Add to cart' />
        <Button url={`/details/${id}`} title='Details' />
      </div>
    </StyledProducts>
  );
};

export default Products;
