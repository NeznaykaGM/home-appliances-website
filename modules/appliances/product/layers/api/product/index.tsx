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
  const router = useRouter();
  const { id } = router.query
  const { data, loading } = useQuery(products.find((e)=> e.id == id));

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
