import React, { useContext } from 'react';
import { Logo } from '@md-ui/logos/main';
import { LWrapper, StyledHeader } from './views';
import { CartContext } from '@md-modules/shared/providers/cart-context';

const Header = () => {
  const active = useContext(CartContext);
  return (
    <StyledHeader>
      <LWrapper>
        <Logo />
      </LWrapper>
      <p onClick={() => active.setActive(true)}>Cart: </p>
    </StyledHeader>
  );
};

export default Header;
