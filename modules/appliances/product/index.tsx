import React from 'react';
import DetailsPresentation from '@md-modules/appliances/product/layers/presentation';
import { ProductAPIContextProvider } from '@md-modules/appliances/product/layers/api/product';
import { ProductBLContextProvider } from '@md-modules/appliances/product/layers/business';

const DetailsContainer = () => {
  return (
    <ProductAPIContextProvider>
      <ProductBLContextProvider>
        <DetailsPresentation />
      </ProductBLContextProvider>
    </ProductAPIContextProvider>
  );
};

export default DetailsContainer;
