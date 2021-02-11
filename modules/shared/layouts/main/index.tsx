import * as React from 'react';
// view components
import Header from '@md-ui/headers';
import { Wrapper } from './views';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export { MainLayout };
