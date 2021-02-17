import React, { useContext } from 'react';
import { Product } from '../../../../shared/mock';
import { CartContext } from '@md-modules/shared/providers/cart-context';

interface Context {
  products: Product[];
  deleteProductFromCart: (id: string | number) => void;
  totalAmountItemCart: number;
  countItemCart: number;
}

const CartBLContext = React.createContext<Context>({
  products: [],
  deleteProductFromCart: (_id) => {},
  totalAmountItemCart: 0,
  countItemCart: 0
});

const CartBLContextProvider: React.FC = ({ children }) => {
  const { cartProducts, deleteProductFromCart, totalAmountItemCart, countItemCart } = useContext(CartContext);
  return (
    <CartBLContext.Provider
      value={{
        products: cartProducts,
        deleteProductFromCart,
        totalAmountItemCart,
        countItemCart
      }}
    >
      {children}
    </CartBLContext.Provider>
  );
};

export { CartBLContextProvider, CartBLContext };
