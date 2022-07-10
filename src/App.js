import React from "react";
import './App.css';

import {BasketProvider} from "./context/basket";
import {LoggedInProvider} from "./context/loggedIn";
import {Route, Routes} from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import Product from "./containers/Product";
import Account from './containers/Account';
import SignIn from './containers/SignIn';
import Checkout from './containers/Checkout';

function App() {
    return (
        <BasketProvider>
            <LoggedInProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="account" element={<Account/>}/>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="product/:productID" element={<Product/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="category/:categoryName" element={<Home/>}/>
                </Routes>
            </LoggedInProvider>
        </BasketProvider>
    );
}

export default App;
