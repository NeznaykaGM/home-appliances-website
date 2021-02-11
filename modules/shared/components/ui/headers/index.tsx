import React from 'react';
import { Logo } from '@md-ui/logos/main';
import { LWrapper, StyledHeader } from './views';

const Header = () => {
  return (
    <StyledHeader>
      <LWrapper>
        <Logo />
      </LWrapper>
      {/*<Link href='/'>*/}
      {/*  <h2 style={{ cursor: 'pointer' }}>Appliances</h2>*/}
      {/*</Link>*/}
      <p>Cart: </p>
    </StyledHeader>
  );
};

export default Header;
