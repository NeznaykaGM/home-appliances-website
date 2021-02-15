import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getCartProducts, Product } from '@md-modules/shared/mock';


interface Context {
  cartProducts: Product[];
  addProductToCart: (product: Product) => void;
  active: boolean;
  setActive: (isActive: boolean) => void;
  countItemCart: number;
  deleteProductFromCart: (productId: string | number) => void
}


export const CartContext = React.createContext<Context>({
    addProductToCart: (_product) => {
    },
    cartProducts: [],
    active: false,
    setActive: (_isActive) => {
    },
    countItemCart: 0,
    deleteProductFromCart: (_productId) => {
    }
  }
);

const CartContextProvider: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as Product[]);


  const deleteProductFromCart = useCallback((productId: string | number) => {
    const filteredCart = cartProducts.filter(({id}) => id !== productId)
    setCartProducts(filteredCart)
  }, [cartProducts]);

  const addProductToCart = useCallback((product: Product) => {
    const isProductInCart = cartProducts.some(e => product.id == e.id);
    if (!isProductInCart) {
      setCartProducts(prev => {
        return [...prev, product];
      });
    }
  }, [cartProducts]);


  useEffect(() => {
    if(cartProducts.length === 0) {
      setActive(false)
    }
  },[cartProducts])


  useEffect(() => {
    setCartProducts(getCartProducts());
  }, []);
  const countItemCart = useMemo(() => cartProducts.length, [cartProducts]);
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        active,
        setActive,
        countItemCart,
        deleteProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
