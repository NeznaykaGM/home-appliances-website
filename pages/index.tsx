import * as React from 'react';
import styles from '@md-modules/shared/styles/Home.module.css';
import ProductsContainer from '@md-modules/appliances/products';
import { MainLayout }  from '@md-modules/shared/layouts/main';
import Button from '@md-ui/button/main';

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
