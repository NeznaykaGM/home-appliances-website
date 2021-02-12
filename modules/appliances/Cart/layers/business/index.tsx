import React from 'react';
import { CartProducts, Product } from '../../../../shared/mock/index';

interface Context {
  products: Product[];
}

export const CartBLContext = React.createContext<Context>({
  products: []
});

const CartBLContextProvider: React.FC = ({ children }) => {
  return <CartBLContext.Provider value={{ products: CartProducts }}>{children}</CartBLContext.Provider>;
};

export default CartBLContextProvider;
