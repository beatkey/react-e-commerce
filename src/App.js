import React from "react";
import './App.css';

import {BasketProvider} from "./context/basket";
import {Route, Routes} from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import Product from "./containers/Product";
import Account from './containers/Account';
import SignIn from './containers/SignIn';

function App() {
    return (
        <BasketProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="account" element={<Account/>}/>
                <Route path="sign-in" element={<SignIn/>}/>
                <Route path="product/:productID" element={<Product/>}/>
            </Routes>
        </BasketProvider>
    );
}

export default App;
