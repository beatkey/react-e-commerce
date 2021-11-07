import './App.css';
import Header from './components/header';
import Products from './components/products';
import React from "react";
import {BasketProvider} from "./context/basket";

function App() {
    return (
        <BasketProvider>
            <div className="App">
                <Header/>
                <Products/>
            </div>
        </BasketProvider>
    );
}

export default App;
