import React, { useContext } from 'react';
import { Logo } from '@md-ui/logos/main';
//context
import { CartContext } from '@md-modules/shared/providers/cart-context';
//views
import { LWrapper, WHeader, WCart } from './views';

const Header = () => {
  const { countItemCart, setActiveCart } = useContext(CartContext);
  return (
    <WHeader>
      <LWrapper>
        <Logo />
      </LWrapper>
      <WCart onClick={() => setActiveCart(true)}>Cart: {countItemCart}</WCart>
    </WHeader>
  );
};

export default Header;
