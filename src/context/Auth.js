import {createContext, useContext, useEffect, useState} from "react";

const Context = createContext();

const Provider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("logged-in") === 'true');

    useEffect(() => {
        localStorage.setItem('logged-in', loggedIn);
    }, [loggedIn])

    const data = {
        loggedIn,
        setLoggedIn
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext(Context)

export default Provider
