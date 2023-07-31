import axios from "axios";
import React from "react";
import { useState, createContext, useEffect } from "react";

//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    //   const fetchProducts=async()=>{
    //     const response=await fetch("https://fakestoreapi.com/products");
    //     const data=await response.json();
    //     setproducts(data);
    //     // console.log(data);
    //   }
    // fetchProducts();

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        //  console.log(res.data);
        setproducts(res.data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
