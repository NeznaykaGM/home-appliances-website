export const useLocalStorage = <S>() => {
  const getStoreItem = () => {
    try {
     return JSON.parse(localStorage.getItem('CartState') as string) || [];
    } catch (err) {
      console.error(err);
    }
  };

  const addProduct = (products: S) => {
    localStorage.setItem('CartState', JSON.stringify([...getStoreItem(),products]));
  };

  const removeProduct = (filteredCart: S[]) => {
    localStorage.setItem('CartState', JSON.stringify(filteredCart));
  };

  return {
    addProduct,
    removeProduct,
    getProducts: () => getStoreItem,
  };
};
