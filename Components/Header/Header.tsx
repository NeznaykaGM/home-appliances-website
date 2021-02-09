import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: #5856d6;
  color: white;
  display: flex;
  padding: 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <h2 style={{ cursor: 'pointer' }}>Header</h2>
      </Link>
      <p>Cart: </p>
    </StyledHeader>
  );
};

export default Header;
