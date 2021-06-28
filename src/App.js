import './App.css';
import Header from './components/header';
import Products from './components/products';
import React from "react";
import {AppContext} from './context';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div className="App">
            <AppContext.Provider value="sj">
                <Header/>
                <Products/>
            </AppContext.Provider>
        </div>
    );
}
