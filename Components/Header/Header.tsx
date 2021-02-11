import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  background: #5856d6;
  color: white;
  display: flex;
  padding: 10px;

  p {
    align-self: flex-end;
    justify-content: flex-end;
    margin-left: auto;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <h2 style={{ cursor: 'pointer' }}>Household appliances store</h2>
      </Link>
      <p>Cart: </p>
    </StyledHeader>
  );
};

export default Header;
