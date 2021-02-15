import React from 'react';
import { products } from '@md-modules/shared/mock';
import ProductsCard from '@md-modules/appliances/products/components/card';
import { ProductsContainer } from './views';

const ProductsPresentation = () => {
  return (
    <ProductsContainer>
      {products.map((element) => (
        <ProductsCard key={element.id} img={element.img} name={element.name} price={element.price} id={element.id} />
      ))}
    </ProductsContainer>
  );
};

export default ProductsPresentation;
