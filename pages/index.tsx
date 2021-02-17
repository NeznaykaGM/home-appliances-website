import * as React from 'react';
import { ProductsContainer } from '@md-modules/appliances/products';
import { MainLayout } from '@md-modules/shared/layouts/main';

const Home = () => {
  // env example
  // console.log(process.env.ANALYTICS_ID) for server side
  // console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID) for client side
  return (
    <MainLayout>
      <ProductsContainer />
    </MainLayout>
  );
};

export default Home;
