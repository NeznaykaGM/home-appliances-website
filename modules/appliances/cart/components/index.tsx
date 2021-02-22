import React from 'react';
//views
import { MWrapper, MCWrapper, ChildrenWrapper, AmountWrapper } from './views';

interface Props {
  activeCart: boolean;
  setActiveCart: (active: boolean) => void;
  totalAmountItemCart: number;
}
/*TODO*/
const Cart: React.FC<Props> = ({ totalAmountItemCart, activeCart, setActiveCart, children }) => {
  return (
    <MWrapper
      onClick={() => setActiveCart(false)}
      opacity={activeCart ? '1' : '0'}
      pointerEvents={activeCart ? 'all' : 'none'}
    >
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
