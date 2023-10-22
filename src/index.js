import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next"
import i18next from 'i18next';
import { useState, createContext, useContext } from "react";
import global_es from "./traslations/es/global.json"
import global_en from "./traslations/en/global.json"
import axios from 'axios';

i18next.init({
  interpolation: {escapeValue:false},
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  },
})


const ProductsContext = createContext();


function DatosAPI() {
  const [products,setProducts]= useState([])
  const getProducts = async () => {
    const ej = await axios.get("https://fakestoreapi.com/products")
    setProducts(ej.data);
    console.log(products);
  
  }


  return(
    <ProductsContext.Provider value={products}>


    </ProductsContext.Provider>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
   <DatosAPI>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
    </DatosAPI>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
