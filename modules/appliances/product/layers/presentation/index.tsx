import React from 'react';
import { useRouter } from 'next/router';
import { products } from '@md-modules/shared/mock';
import Details from '@md-modules/appliances/product/components/products-details';

const DetailsPresentation = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((element) => (element.id.toString() === id ? element : undefined));

  return (
    <>
      {product ? (
        <Details
          key={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          descriptions={product.descriptions}
        />
      ) : (
        <div>This page is empty</div>
      )}
    </>
  );
};

export default DetailsPresentation;
