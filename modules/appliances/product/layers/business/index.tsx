import React, { useContext, useMemo } from 'react';
import { Product } from '@md-modules/shared/mock';
import { ProductAPIContext } from '@md-modules/appliances/product/layers/api/product';

interface Context {
  productInfo: Product[];
}

const ProductBLContext = React.createContext<Context>({
  productInfo: [],
});

const ProductBLContextProvider: React.FC = ({ children }) => {
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

  return (
    <ProductBLContext.Provider
      value={{
        productInfo
      }}
    >
      {children}
    </ProductBLContext.Provider>
  );
};

export { ProductBLContextProvider, ProductBLContext };
