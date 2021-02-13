import React from 'react';
import { products } from '@md-modules/shared/mock';
import ProductsCard from '@md-modules/appliances/products/components/card';
import { StyledContainerProducts } from './views';

const ProductsPresentation = () => {
  const productsList = products.map((element) => (
    <ProductsCard key={element.id} img={element.img} name={element.name} price={element.price} id={element.id} />
  ));

  return <StyledContainerProducts>{productsList}</StyledContainerProducts>;
};

export default ProductsPresentation;
