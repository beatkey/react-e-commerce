import React from "react";
import './App.css';

import {BasketProvider} from "./context/basket";
import {Route, Routes} from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import Product from "./containers/Product";

function App() {
    return (
        <BasketProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="product/:productID" element={<Product/>}/>
            </Routes>
        </BasketProvider>
    );
}

export default App;
