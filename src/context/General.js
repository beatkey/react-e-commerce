import React, {useContext, useState} from "react";

const Context = React.createContext();

const Provider = ({children}) => {
    const [view, setView] = useState(1);
    const [sort, setSort] = useState(false);

    const data = {
        view,
        setView,
        sort,
        setSort
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useGeneral = () => useContext(Context)

export default Provider
