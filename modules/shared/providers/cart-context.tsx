import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { CartProducts, Product } from '@md-modules/shared/mock';
//context
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
  addProductToCart: () => {},
  cartProducts: [],
  active: false,
  setActive: () => {},
  countItemCart: 0,
  deleteProductFromCart: () => {},
  totalAmountItemCart: 0
});

const CartContextProvider: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const [cartProducts, setCartProducts] = useState(CartProducts);

  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('CartState')) {
      localStorage.setItem('CartState', JSON.stringify(CartProducts));
    }
  }

  useEffect(() => {
    try{
      setCartProducts(JSON.parse(localStorage.getItem('CartState') as string));
    }catch (e) {
      setCartProducts([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('CartState', JSON.stringify(cartProducts));
  }, [cartProducts]);

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

  const totalAmountItemCart = useMemo(
    () => cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0),
    [cartProducts]
  );

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
