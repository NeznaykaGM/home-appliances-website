import React, { useContext } from 'react';
import { Logo } from '@md-ui/logos/main';
import { LWrapper, StyledHeader } from './views';
import { CartContext } from '@md-modules/shared/providers/cart-context';

const Header = () => {
  const { countItemCart, setActive } = useContext(CartContext);
  return (
    <StyledHeader>
      <LWrapper>
        <Logo />
      </LWrapper>
      <p onClick={() => setActive(true)}>Cart: {countItemCart}</p>
    </StyledHeader>
  );
};

export default Header;
