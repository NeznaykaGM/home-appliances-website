import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { CartProducts, Product } from '@md-modules/shared/mock';

interface Context {
  cartProducts: Product[];
  addProductToCart: (product: Product) => void;
  active: boolean;
  setActive: (isActive: boolean) => void;
  countItemCart: number;
  deleteProductFromCart: (productId: string | number) => void;
  totalAmountItemCart: number;
}

export const CartContext = React.createContext<Context>({
  addProductToCart: (_product) => {},
  cartProducts: [],
  active: false,
  setActive: (_isActive) => {},
  countItemCart: 0,
  deleteProductFromCart: (_productId) => {},
  totalAmountItemCart: 0,
});

const CartContextProvider: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const [cartProducts, setCartProducts] = useState(CartProducts);

  const deleteProductFromCart = useCallback(
    (productId: string | number) => {
      const filteredCart = cartProducts.filter(({ id }) => id !== productId);
      setCartProducts(filteredCart);
    },
    [cartProducts]
  );



  const addProductToCart = useCallback(
    (product: Product) => {
      const isProductInCart = cartProducts.some((e) => product.id == e.id);
      if (!isProductInCart) {
        setCartProducts((prev) => {
          return [...prev, product];
        });
      }
    },
    [cartProducts]
  );

  useEffect(() => {
    if (cartProducts.length === 0) {
      setActive(false);
    }
  }, [cartProducts]);

  const countItemCart = useMemo(() => cartProducts.length, [cartProducts]);

  let totalAmountItemCart = 0;
  cartProducts.forEach(e => totalAmountItemCart += e.price )

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        active,
        setActive,
        countItemCart,
        deleteProductFromCart,
        totalAmountItemCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
