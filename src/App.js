import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import MainAppBar from './components/MainAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Products from './pages/Products';
import { useState, createContext, useContext } from "react";
import axios from 'axios';
import ProductContextProvider from './contexts/ProductsContextProvider';








function App() {


  return (
    <div>



      <ProductContextProvider>
      <BrowserRouter>
       <MainAppBar/>
       <Header/>
          <Routes>
              <Route path="" element={<Main/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
          </Routes>
      </BrowserRouter>
      </ProductContextProvider>

      </div>
  );
}

export default App;
