import { CartProducts, Product } from '@md-modules/shared/mock';
//hooks
import React, { useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '@md-utils/localstorage';
//context
interface Context {
  cartProducts: Product[];
  addProductToCart: (product: Product) => void;
  active: boolean;
  setActive: (isActive: boolean) => void;
  countItemCart: number;
  deleteProductFromCart: (productId: number) => void;
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
  const [cartProducts, setCartProducts] = useState<Product[]>(CartProducts);

  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('CartState')) {
      localStorage.setItem('CartState', JSON.stringify(CartProducts));
    }
  }

  const {deleteProductFromCart, addProductToCart} = useLocalStorage<Product>(cartProducts, setCartProducts)

  useEffect(() => {
    if (cartProducts.length === 0) {
      setActive(false);
    }
  }, [cartProducts]);

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
