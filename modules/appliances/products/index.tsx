import React from 'react';
import ProductsPresentation from '@md-modules/appliances/products/layers/presentation/ProductsPresentation';
import ProductsBLContextProvider from '@md-modules/appliances/products/layers/businnes';

const ProductsContainer = () => {
  return (
    <ProductsBLContextProvider>
      <ProductsPresentation />
    </ProductsBLContextProvider>
  );
};

export default ProductsContainer;
