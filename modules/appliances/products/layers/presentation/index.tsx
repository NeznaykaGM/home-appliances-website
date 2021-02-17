import React, { useContext } from 'react';
import ProductsCard from '@md-modules/appliances/products/components/card';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { ProductsContainer } from './views';
//context
import { ProductsBLContext } from '../businnes/index';
import { ProductsAPIContext } from '@md-modules/appliances/products/layers/api/products';

const ProductsPresentation = () => {
  const { productsList } = useContext(ProductsBLContext);
  const { isLoading } = useContext(ProductsAPIContext);
  return (
    <ProductsContainer>
      <ContentLoader isLoading={isLoading}>
        {productsList.map((element) => (
          <ProductsCard key={element.id} img={element.img} name={element.name} price={element.price} id={element.id} />
        ))}
      </ContentLoader>
    </ProductsContainer>
  );
};

export default ProductsPresentation;
