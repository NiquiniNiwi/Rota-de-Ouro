import { useState, useCallback, useEffect, createContext, useContext } from "react";

const headerContext = createContext({});


const HeaderProvider = ({children}) => {
    const [Home, setHomeState] = useState(true);
    const [Search, setSearchState] = useState(false);
    const [About, setAboutState] = useState(false);

    const setHome = useCallback((value) => {
        setHomeState(value);
    }, []);

    const setSearch = useCallback((value) => {
        setSearchState(value);
    }, []);

    const setAbout = useCallback((value) => {
        setAboutState(value);
    }, []);

    useEffect(() => {
        // console.log([Home, "Home state"], [About, "About state"], [Search, "Search state"]);
      }, [Home, Search, About]);
    
    return <headerContext.Provider
           value={{
            setHome,
            Home,
            setSearch,
            Search,
            setAbout,
            About,
            }} 
        >
        {children}
    </headerContext.Provider>
}

const useHeader = () => {
    return useContext(headerContext)
}

export {HeaderProvider, useHeader}