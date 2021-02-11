import React from 'react';
import Link from 'next/link';
import { StyledHeader } from './views'
import { Logo } from '@md-ui/logos/main';
import {LWrapper} from './views';

const Index = () => {
  return (
    <StyledHeader>
      <LWrapper>
        <Logo/>
      </LWrapper>
      {/*<Link href='/'>*/}
      {/*  <h2 style={{ cursor: 'pointer' }}>Appliances</h2>*/}
      {/*</Link>*/}
      <p>Cart: </p>
    </StyledHeader>
  );
};

export default Index;

