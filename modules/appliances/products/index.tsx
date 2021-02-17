import React from 'react';
import ProductsPresentation from '@md-modules/appliances/products/layers/presentation';
import ProductsBLContextProvider from '@md-modules/appliances/products/layers/businnes';
import { ProductsAPIContextProvider } from '@md-modules/appliances/products/layers/api/products';

const ProductsContainer = () => {
  return (
    <ProductsAPIContextProvider>
      <ProductsBLContextProvider>
        <ProductsPresentation />
      </ProductsBLContextProvider>
    </ProductsAPIContextProvider>
  );
};

export { ProductsContainer };
