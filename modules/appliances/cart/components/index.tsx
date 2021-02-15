import React from 'react';
import { MWrapper, MCWrapper } from './views';

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
}
/*TODO*/
const Cart: React.FC<Props> = ({ active, setActive, children }) => {

  return (
    <MWrapper onClick={() => setActive(false)} opacity={active ? '1' : '0'} pointerEvents={active ? 'all' : 'none'}>
      <MCWrapper onClick={(event) => event.stopPropagation()}>{children}</MCWrapper>
    </MWrapper>
  );
};

export default Cart;
