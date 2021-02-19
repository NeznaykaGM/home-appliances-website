
import { useEffect } from 'react';

interface AnyProduct {
  id: number
}

export const useLocalStorage = <S extends AnyProduct>(cartProducts: S[], setCartProducts: any) => {

  useEffect(() => {
    try{
      setCartProducts(JSON.parse(localStorage.getItem('CartState') as string));
    }catch (err) {
      console.error(err)
      setCartProducts([]);
    }
  }, []);

  const deleteProductFromCart =
    (productId: number) => {
      const filteredCart = cartProducts.filter(({ id }) => id !== productId);
      setCartProducts(filteredCart);
    }

  const addProductToCart =
    (product: S) => {
      const isProductInCart = cartProducts.some((e) => e.id == product.id);
      if (!isProductInCart) {
        setCartProducts((prev: S[]) => {
          return [...prev, product];
        });
      }
    }

  useEffect(() => {
    localStorage.setItem('CartState', JSON.stringify(cartProducts));
  },[cartProducts])

  return{
    deleteProductFromCart,
    addProductToCart
  }
}