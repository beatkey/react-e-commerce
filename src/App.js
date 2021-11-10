import React from "react";
import './App.css';
import {BasketProvider} from "./context/basket";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";

function App() {
    return (
        <BasketProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </BasketProvider>
    );
}

export default App;
