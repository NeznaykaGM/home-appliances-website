import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Product, products } from '@md-modules/shared/mock';

interface Context {
  products: Product[] | undefined;
  isLoading: boolean;
}

const ProductsAPIContext = React.createContext<Context>({
  products: [],
  isLoading: false
});

const ProductsAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading } = useQuery(products);
  return (
    <ProductsAPIContext.Provider
      value={{
        products: data,
        isLoading: loading
      }}
    >
      {children}
    </ProductsAPIContext.Provider>
  );
};

export { ProductsAPIContextProvider, ProductsAPIContext };
