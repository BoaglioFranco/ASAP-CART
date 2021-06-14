import React, { useReducer } from "react";
import { productReducer } from "./ProductReducer";

export const ProductContext = React.createContext(null);


//initial State
const initialProducts = [
  { id: 1, name: "Tomate", price: 120, quantity: 0 },
  { id: 2, name: "Galletitas", price: 250, quantity: 0 },
  { id: 3, name: "Lata Atun", price: 380, quantity: 0 },
  { id: 4, name: "Coca-cola", price: 270, quantity: 0 },
];

export const ProductProvider = (props) => {
    const [products, dispatch] = useReducer(productReducer, initialProducts);

  return <ProductContext.Provider {...props} value={{products, dispatch}} />;
};
