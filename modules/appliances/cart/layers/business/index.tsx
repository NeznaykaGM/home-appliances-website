import React, { useContext } from 'react';
//type
import { Product } from '../../../../shared/mock';
//context
import { CartContext } from '@md-modules/shared/providers/cart-context';

interface Context {
  products: Product[];
  deleteProductFromCart: (id: number) => void;
  totalAmountItemCart: number;
  countItemCart: number;
}

const CartBLContext = React.createContext<Context>({
  products: [],
  deleteProductFromCart: () => {},
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
