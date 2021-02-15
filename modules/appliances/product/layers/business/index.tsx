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
        id: 1,
        name: 'Washer',
        price: 100,
        img:
          'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/_/d_z01.jpg',
        descriptions:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dicta doloribus laborum magnam nisi, porro possimus quia quod? A accusantium deleniti doloribus est maxime minus, obcaecati saepe sapiente sit.'
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
