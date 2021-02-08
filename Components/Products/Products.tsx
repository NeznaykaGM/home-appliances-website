import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Linking } from 'react-native';

const StyledProducts = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Параметры тени */
  padding: 10px;
  margin: 10px;

  a {
    text-decoration: none;
    color: black !important;
    padding: 5px;
  }
  img{
    width: 100%;
    height: 200px;
    overflow: hidden;
    text-align: right;
    user-select: none;
    pointer-events: none;
    cursor: pointer;
    //box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    object-fit: cover;
  }
`;

const Products = ({img}) => {
  return (
    <StyledProducts>
      <Link href="/details"><img src={img} alt='' /></Link>
      <Link href='/lll'>
        <a>Add to cart</a>
      </Link>
      <Link href='/details'>
        <a>Details</a>
      </Link>
    </StyledProducts>
  );
};

export default Products;
