import { Product } from '@md-modules/shared/mock';
//hooks
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '@md-utils/localstorage';
//context
interface Context {
  cartProducts: Product[];
  addProductToCart: (product: Product) => void;
  activeCart: boolean;
  setActiveCart: (isActive: boolean) => void;
  countItemCart: number;
  deleteProductFromCart: (productId: number) => void;
  totalAmountItemCart: number;
}

export const CartContext = React.createContext<Context>({
  addProductToCart: () => {},
  cartProducts: [],
  activeCart: false,
  setActiveCart: () => {},
  countItemCart: 0,
  deleteProductFromCart: () => {},
  totalAmountItemCart: 0
});

const CartContextProvider: React.FC = ({ children }) => {
  //hooks cart state
  const [activeCart, setActiveCart] = useState(false);
  //local state
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  //local storage hook: {addProduct,removeProducts} methods
  const { addProduct, removeProduct } = useLocalStorage<Product>();

  //update local state
  const setInCart = useCallback(() => {
    try {
      setCartProducts(JSON.parse(localStorage.getItem('CartState') as string) || []);
    } catch (err) {
      console.error(err);
      setCartProducts([]);
    }
  }, []);

  //Effect(s)
  useEffect(() => {
    setInCart();
  }, []);

  useEffect(() => {
    if (cartProducts.length === 0) {
      setActiveCart(false);
    }
  }, [cartProducts]);

  //Logic
  const deleteProductFromCart = (productId: number) => {
    const filteredCart = cartProducts.filter(({ id }) => id !== productId);
    removeProduct(filteredCart);
    setInCart();
  };

  const addProductToCart = (product: Product) => {
    const isProductInCart = cartProducts.some((e) => e.id == product.id);
    if (!isProductInCart) {
      addProduct(cartProducts, product);
      setInCart();
    }
  };

  const countItemCart = cartProducts.length;
  const totalAmountItemCart = useMemo(
    () => cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0),
    [cartProducts]
  );

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        activeCart: activeCart,
        setActiveCart: setActiveCart,
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
