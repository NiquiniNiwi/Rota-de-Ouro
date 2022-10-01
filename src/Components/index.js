import { useHeader } from "../Hooks/Header";
import AboutComponent from "./About";
import Header from "./Header";
import Map from "./Map";
import Searcher from "./Search";

function Components() { 
    const {About, Search} = useHeader();
    return (
        <>
            <Header />
            {Search && (<Searcher />)}
            {About && (<AboutComponent />)}
            <Map />
        </>
    )
}

export default Components;