import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <Link href='/'>
        <h1 style={{ cursor: 'pointer' }}>Header</h1>
      </Link>
    </div>
  );
};

export default Header;
