import React from 'react';
import CartPresentation from '@md-modules/appliances/cart/layers/presentation';
import { CartBLContextProvider } from '@md-modules/appliances/cart/layers/business';

const CartContainer = () => {
  return (
    <CartBLContextProvider>
      <CartPresentation />
    </CartBLContextProvider>
  );
};

export default CartContainer;
