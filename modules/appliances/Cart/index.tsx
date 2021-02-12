import React from 'react';
import CartPresentation from '@md-modules/appliances/Cart/layers/presentation';
import CartBLContextProvider from '@md-modules/appliances/Cart/layers/business';

const CartContainer = () => {
  return (
    <CartBLContextProvider>
      <CartPresentation/>
    </CartBLContextProvider>
  );
};

export default CartContainer;