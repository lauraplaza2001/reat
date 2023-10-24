import './App.css';
import Header from "./components/Header";
import MainAppBar from './components/MainAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Products from './pages/Products';
import { useState} from "react";
import ProductContextProvider from './contexts/ProductsContextProvider';
import Login from './pages/Login';
import OnlyUser from './pages/OnlyUser';
import { AuthProvider } from './contexts/AuthContext';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>

      <AuthProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <MainAppBar isAuthenticated={isAuthenticated}/>
            <Header/>
                <Routes>
                    <Route path="" element={<Main/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/logIn" element={<Login setIsAuthenticated={setIsAuthenticated}/>}></Route>
                    <Route path="/onlyUser" element={<OnlyUser />}></Route>
                </Routes>
          </BrowserRouter>
        </ProductContextProvider>
      </AuthProvider>
      </div>
  );
}

export default App;
