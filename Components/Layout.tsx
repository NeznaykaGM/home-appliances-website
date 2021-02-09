import React from 'react';
import Header from './Header/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fafafa;
  width: 100%;
  height: 100%;
`;

interface props {
  children: string;
  [propName: string]: any;
}

const Layout = ({ children }: props) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
