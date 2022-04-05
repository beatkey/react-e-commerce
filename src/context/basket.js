import React, {useEffect, useState} from "react";

export const BasketContext = React.createContext();

export const BasketProvider = (props) => {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if(cart){
            setBasket(cart);
        }
    }, [])

    return (
        <BasketContext.Provider value={[basket, setBasket]}>
            {props.children}
        </BasketContext.Provider>
    )
}
