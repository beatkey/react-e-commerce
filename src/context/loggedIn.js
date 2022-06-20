import React, {useEffect, useState} from "react";

export const LoggedInContext = React.createContext();

export const LoggedInProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem("logged-in");
        if(loggedIn){
            setLoggedIn(loggedIn);
        }
    }, [])

    return (
        <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
            {props.children}
        </LoggedInContext.Provider>
    )
}
