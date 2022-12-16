import { createContext, useState, useEffect, useContext } from 'react';
import supabase from '../config/data';

const ProductsData = createContext();

const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const { data, error } = await supabase.from('categories').select();
    error && console.log(error);
    data && (
      setProducts(data)
      );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ProductsData.Provider value={products}>{children}</ProductsData.Provider>
  );
};

export const useGlobalProductContext = () => useContext(ProductsData);
export { ProductsData, ProductsContext };
