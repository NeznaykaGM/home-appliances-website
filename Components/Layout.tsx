import React from 'react';
import Header from './Header/Header';
import { AppProps } from 'next/app';

const Layout = ({children}: AppProps) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;