import axios from "axios";
import { useState, createContext, useContext, useEffect, useCallback } from "react";

const APIContext = createContext({});

const APIProvider = ({children}) => {
    const [pontos, setPontos] = useState({});
    const APICall = useCallback(async () => {
        await axios.get("https://raw.githubusercontent.com/NiquiniNiwi/teste/main/Pontos.json"
        ).then((response) => {
            setPontos(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        APICall();
    }, [APICall]);
    return <APIContext.Provider
    value={{pontos}}>
        {children}
    </APIContext.Provider>
}

const useAPI = () => {
    return useContext(APIContext);
}

export {APIProvider, useAPI};