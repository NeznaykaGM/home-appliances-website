export const useLocalStorage = <S>() => {

  const addProduct = (cartProducts: S[],products: S) => {
    localStorage.setItem('CartState', JSON.stringify([...cartProducts,products]));
  };
  const removeProduct = (filteredCart: S[]) => {
    localStorage.setItem('CartState', JSON.stringify(filteredCart));
  };

  return {
    addProduct,
    removeProduct
  };
};
