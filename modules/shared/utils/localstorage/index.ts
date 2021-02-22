export const useLocalStorage = <S>() => {

  const addProduct = (prevCart: S[],products: S) => {
    localStorage.setItem('CartState', JSON.stringify([...prevCart,products]));
  };
  const removeProduct = (filteredCart: S[]) => {
    localStorage.setItem('CartState', JSON.stringify(filteredCart));
  };

  return {
    addProduct,
    removeProduct
  };
};
