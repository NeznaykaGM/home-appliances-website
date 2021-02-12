import React, { useState } from 'react';
import { CartProducts } from '@md-modules/shared/mock';


export const CartContext = React.createContext<any>({});

const CartContextProvider: React.FC = ({children}) => {
  const [active, setActive] = useState(false)
  const countItems = CartProducts.length


  return (
    <CartContext.Provider value={{
      active: active,
      setActive: setActive,
      countItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;