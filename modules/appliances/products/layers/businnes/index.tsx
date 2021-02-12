import React from 'react';
import { Product, CartProducts, products } from '@md-modules/shared/mock';

const addToCart = (id: any) => {
  const product: any = products.find((e) => e.id === id);
  CartProducts.push(product);
};

export const ProductsBLContext = React.createContext<any>(addToCart);

const ProductsBLContextProvider: React.FC = ({ children }) => {
  return <ProductsBLContext.Provider value={addToCart}>{children}</ProductsBLContext.Provider>;
};

export default ProductsBLContextProvider;
