
import { useEffect } from 'react';

interface AnyProduct {
  id: number
}
export const useLocalStorage = <S extends AnyProduct>(cartProducts: S[], setCartProducts: (param: any) => void) => {

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

  if(typeof window !== 'undefined') {
    localStorage.setItem('CartState', JSON.stringify(cartProducts));
  }

  return{
    deleteProductFromCart,
    addProductToCart
  }
}