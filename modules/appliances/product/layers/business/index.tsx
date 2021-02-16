import React, { useContext, useMemo } from 'react';
import { Product } from '@md-modules/shared/mock';
import { ProductAPIContext } from '@md-modules/appliances/product/layers/api/product';
import { CartContext } from '@md-modules/shared/providers/cart-context';

interface Context {
  productInfo: Product[];
  addToCart: () => void;
}

const ProductBLContext = React.createContext<Context>({
  productInfo: [],
  addToCart: () => {},
});

const ProductBLContextProvider: React.FC = ({ children }) => {
  //api call
  const { product } = useContext(ProductAPIContext);
  const productInfo = useMemo<Product[]>(() => {
    if (!product) {
      return [];
    }
    return [
      {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        descriptions: product.descriptions,
      },
    ];
  }, [typeof product === 'undefined']);

  //Add to cart button callback
  const { addProductToCart } = useContext(CartContext);
  const addToCart = () => {
    addProductToCart(product);
  };

  return (
    <ProductBLContext.Provider
      value={{
        productInfo,
        addToCart,
      }}
    >
      {children}
    </ProductBLContext.Provider>
  );
};

export { ProductBLContextProvider, ProductBLContext };
