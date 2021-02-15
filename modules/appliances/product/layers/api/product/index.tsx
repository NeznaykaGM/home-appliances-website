import React from 'react';
import { products, Product } from '@md-modules/shared/mock';
import { useQuery } from '@md-utils/mock/query';
import { useRouter } from 'next/router';

interface Context {
  product: Product | undefined;
  isLoading: boolean;
}

const ProductAPIContext = React.createContext<Context>({
  product: undefined,
  isLoading: false
});

const ProductAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const {query} = useRouter();
  const { data, loading } = useQuery(products.find(({id})=> id === query.id));

  return (
    <ProductAPIContext.Provider
      value={{
        product: data,
        isLoading: loading
      }}
    >
      {children}
    </ProductAPIContext.Provider>
  );
};

export { ProductAPIContextProvider, ProductAPIContext };
