import React from 'react';
import Details from '@md-modules/appliances/product/components/products-details';
// context
import { ProductAPIContext } from '../api/product';
import { ProductBLContext } from '../business/index';
import { ContentLoader } from '@md-ui/loaders/content-loader';

const DetailsPresentation = () => {
  const { isLoading } = React.useContext(ProductAPIContext);
  const { productInfo, addToCart } = React.useContext(ProductBLContext);
  return (
    <ContentLoader isLoading={isLoading}>
      {productInfo.map((element) => (
        <Details
          callback={addToCart}
          descriptions={element.descriptions}
          key={element.id}
          img={element.img}
          name={element.name}
          price={element.price}
          id={element.id}
        />
      ))}
    </ContentLoader>
  );
};

export default DetailsPresentation;
