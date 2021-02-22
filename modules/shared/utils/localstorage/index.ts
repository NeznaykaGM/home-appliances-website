export const useLocalStorage = <S>() => {
  const getProducts = () => {
    try {
     return JSON.parse(localStorage.getItem('CartState') as string) || [];
    } catch (err) {
      console.error(err);
    }
  };

  const addProduct = (cartProducts: S[],products: S) => {
    localStorage.setItem('CartState', JSON.stringify([...cartProducts,products]));
  };

  const removeProduct = (filteredCart: S[]) => {
    localStorage.setItem('CartState', JSON.stringify(filteredCart));
  };

  return {
    addProduct,
    removeProduct,
    getProducts
  };
};
