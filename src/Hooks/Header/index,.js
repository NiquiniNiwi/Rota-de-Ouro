import { useState, useCallback, useEffect } from "react";

const useHeader = () => {
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
    
    return {Search, setSearch, Home, setHome, About, setAbout}
}

export default useHeader