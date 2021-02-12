import React, { useContext } from 'react';
import { Logo } from '@md-ui/logos/main';
import { LWrapper, StyledHeader } from './views';
import { CartContext } from '@md-modules/shared/providers/cart-context';

const Header = () => {
  const { countItems, setActive } = useContext(CartContext);
  return (
    <StyledHeader>
      <LWrapper>
        <Logo />
      </LWrapper>
      <p onClick={() => setActive(true)}>Cart: {countItems}</p>
    </StyledHeader>
  );
};

export default Header;
