import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(products);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); 

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
