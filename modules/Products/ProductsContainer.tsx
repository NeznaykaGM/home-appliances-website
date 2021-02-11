import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import { products } from '../shared/mock/index'


const StyledContainerProducts = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  //position: relative;
`;


const ProductsContainer = () => {
  const productsList = products.map((element) => (
    <Product key={element.id} img={element.img} name={element.name} price={element.price} id={element.id} />
  ));

  return <StyledContainerProducts>{productsList}</StyledContainerProducts>;
};

export default ProductsContainer;
