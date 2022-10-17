import axios from "axios";
import { useState, createContext, useContext, useEffect, useCallback } from "react";

const APIContext = createContext({});

const APIProvider = ({children}) => {
    const [pontos, setPontos] = useState({});
    const APICall = useCallback(async () => {
        await axios.post("http://us-central1-expanded-rider-170119.cloudfunctions.net/read_all"
        ).then((response) => {
            setPontos(response)
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        //APICall();
    }, []);
    return <APIContext.Provider
    value={{pontos, APICall}}>
        {children}
    </APIContext.Provider>
}

const useAPI = () => {
    return useContext(APIContext);
}

export {APIProvider, useAPI};