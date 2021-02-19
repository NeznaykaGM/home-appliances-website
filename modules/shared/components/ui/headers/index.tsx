import React, { useContext } from 'react';
import { Logo } from '@md-ui/logos/main';
//context
import { CartContext } from '@md-modules/shared/providers/cart-context';
//views
import { LWrapper, WHeader, WCart} from './views';

const Header = () => {
  const { countItemCart, setActive } = useContext(CartContext);
  return (
    <WHeader>
      <LWrapper>
        <Logo />
      </LWrapper>
      <WCart onClick={() => setActive(true)}>Cart: {countItemCart}</WCart>
    </WHeader>
  );
};

export default Header;
