import * as React from 'react';
import styles from '@md-modules/shared/styles/Home.module.css';
// import { MainLayout } from '@md-modules/shared/layouts/main';
import styled from 'styled-components';
import ProductsPage from '../Components/Products/ProductsContainer';

const Home = () => {
  // env example
  // console.log(process.env.ANALYTICS_ID) for server side
  // console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID) for client side
  return (
    <div>
      <ProductsPage />
    </div>
  );
};

export default Home;
