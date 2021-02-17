import React from 'react';
//views
import { MWrapper, MCWrapper, ChildrenWrapper, AmountWrapper } from './views';

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
  totalAmountItemCart: number;
}
/*TODO*/
const Cart: React.FC<Props> = ({ totalAmountItemCart, active, setActive, children }) => {
  return (
    <MWrapper onClick={() => setActive(false)} opacity={active ? '1' : '0'} pointerEvents={active ? 'all' : 'none'}>
      <MCWrapper onClick={(event) => event.stopPropagation()}>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <AmountWrapper>
          <p>Total amount: {totalAmountItemCart}</p>
        </AmountWrapper>
      </MCWrapper>
    </MWrapper>
  );
};
export default Cart;
