import React, { useContext, useState } from 'react';
import { Product, products } from '@md-modules/shared/mock';
import {CartContext} from '../../../../shared/providers/cart-context'

/*TODO*/

interface Context {
  addToCart: (id: string | number | undefined) => void;
}

export const ProductsBLContext = React.createContext<Context>({} as Context);

const ProductsBLContextProvider: React.FC = ({ children }) => {
  const {addProductToCart} = useContext(CartContext)
  const addToCart = (id: string | number | undefined) => {
    const product = products.find((e) => e.id === id) as Product;

    addProductToCart(product);
  };

  return (
    <ProductsBLContext.Provider
      value={{
        addToCart
      }}
    >
      {children}
    </ProductsBLContext.Provider>
  );
};

export default ProductsBLContextProvider;
