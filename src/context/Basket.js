import React, {useContext, useEffect, useState} from "react";

const Context = React.createContext();

const Provider = ({children}) => {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const basket = JSON.parse(localStorage.getItem("basket"));
        if(basket){
            setBasket(basket);
        }
    }, [])

    const data = {
        basket,
        setBasket
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useBasket = () => useContext(Context)

export default Provider
