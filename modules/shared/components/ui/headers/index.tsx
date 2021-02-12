import React from 'react';
import { Logo } from '@md-ui/logos/main';
import { LWrapper, StyledHeader } from './views';

interface Props {
  active: boolean;
  setActive: any;
}

const Header: React.FC<Props> = ({active, setActive}) => {
  return (
    <StyledHeader>
      <LWrapper>
        <Logo />
      </LWrapper>
      <p onClick={() => setActive(true)}>Cart: </p>
    </StyledHeader>
  );
};

export default Header;
