import React, { useContext } from 'react';
import { ProductsBLContext } from '../businnes/index';
import ProductsCard from '@md-modules/appliances/products/components/card';
import { ProductsContainer } from './views';
import { ProductsAPIContext } from '@md-modules/appliances/products/layers/api/products';
import { ContentLoader } from '@md-ui/loaders/content-loader';

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
