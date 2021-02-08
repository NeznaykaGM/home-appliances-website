import * as React from 'react';
// view components
import { Header } from '@md-ui/headers/main';
// views
import { Wrapper } from './views';

const MainLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

export { MainLayout };
