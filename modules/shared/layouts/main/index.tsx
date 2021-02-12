import * as React from 'react';
import Header from '@md-ui/headers';
// view components
import { Wrapper } from './views';

import Cart from '@md-ui/cart/main';
import { useState } from 'react';

const MainLayout: React.FC = ({ children }) => {
  const [active,setActive] = useState(false);

  return (
    <Wrapper>
      <Header active={active} setActive={setActive}/>
      {children}
      <Cart active={active} setActive={setActive}/>
    </Wrapper>
  );
};

export { MainLayout };
