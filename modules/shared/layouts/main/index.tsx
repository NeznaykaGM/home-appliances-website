import * as React from 'react';
import Header from '@md-ui/headers';
// view components
import { Wrapper } from './views';
import CartContextProvider from '@md-modules/shared/providers/cart-context';
import CartContainer from '@md-modules/appliances/cart';


const MainLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <CartContextProvider>
        <Header />
        {children}
        <CartContainer />
      </CartContextProvider>
    </Wrapper>
  );
};

export { MainLayout };
