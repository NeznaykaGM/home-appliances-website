import React, { useContext } from 'react';
import { CartContext } from '../../../../shared/providers/cart-context';
import { ProductsAPIContext } from '@md-modules/appliances/products/layers/api/products';

// mock
import { Product } from '@md-modules/shared/mock';

interface Context {
  addToCart: (id: string | number | undefined) => void;
  productsList: Product[];
}

export const ProductsBLContext = React.createContext<Context>({} as Context);

const ProductsBLContextProvider: React.FC = ({ children }) => {
  const { addProductToCart } = useContext(CartContext);
  const { products } = useContext(ProductsAPIContext);

  const productsList = React.useMemo<Product[]>(() => {
    if (!products) {
      return [];
    }
    return products;
  }, [typeof products === 'undefined']);

  const addToCart = (id: string | number | undefined) => {
    const product = productsList.find((e) => e.id === id) as Product;

    addProductToCart(product);
  };

  return (
    <ProductsBLContext.Provider
      value={{
        addToCart,
        productsList
      }}
    >
      {children}
    </ProductsBLContext.Provider>
  );
};

export default ProductsBLContextProvider;
