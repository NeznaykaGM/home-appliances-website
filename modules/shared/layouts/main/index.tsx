import * as React from 'react';
// view components
import Index from '@md-ui/headers';
import { Wrapper } from './views';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Index />
      {children}
    </Wrapper>
  );
};

export { MainLayout };
