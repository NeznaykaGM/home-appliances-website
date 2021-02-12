import React, { useState } from 'react';
import { CartProducts } from '@md-modules/shared/mock';

export const CartContext = React.createContext<any>({});

const CartContextProvider: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const countItemCart = CartProducts.length;
  return (
    <CartContext.Provider
      value={{
        active: active,
        setActive: setActive,
        countItemCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
