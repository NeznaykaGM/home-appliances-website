import React, { useContext } from 'react';
import { Product } from '../../../../shared/mock/index';
import { CartContext } from '@md-modules/shared/providers/cart-context';

interface Context {
  products: Product[];
  deleteProductFromCart: (id: string | number) => void;
}

const CartBLContext = React.createContext<Context>({
  products: [],
  deleteProductFromCart: (_id) => {}
});

const CartBLContextProvider: React.FC = ({ children }) => {
  const { cartProducts, deleteProductFromCart } = useContext(CartContext);
  return (
    <CartBLContext.Provider value={{ products: cartProducts, deleteProductFromCart }}>
      {children}
    </CartBLContext.Provider>
  );
};

export { CartBLContextProvider, CartBLContext };
