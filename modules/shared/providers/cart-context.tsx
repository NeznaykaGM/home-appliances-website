import React, { useState } from 'react';


export const CartContext = React.createContext<any>({});

const CartContextProvider: React.FC = ({children}) => {
  const [active, setActive] =useState(false)

  return (
    <CartContext.Provider value={{
      active: active,
      setActive: setActive,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;