import React from 'react';
import ProductsCard from './components/card';
import styled from 'styled-components';
import { products } from '../../shared/mock';

const StyledContainerProducts = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
`;

const ProductsContainer = () => {
  const productsList = products.map((element) => (
    <ProductsCard key={element.id} img={element.img} name={element.name} price={element.price} id={element.id} />
  ));

  return <StyledContainerProducts>{productsList}</StyledContainerProducts>;
};

export default ProductsContainer;
