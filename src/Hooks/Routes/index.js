import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import useGeoLocation from "../Geolocation";


const useRoutes = () => {
    const location = useGeoLocation();
    const [route, setRoute] = useState(undefined);
    const [routeState, setRouteState] = useState(false);
    const [dState, setDState] = useState(false);
    const [polyline, setPolyline] = useState([]);
    const [destination, setDestination] = useState([location.coodinates.long, location.coodinates.lat])


    const setRouteValue = useCallback((value) => {
        setRoute(value);
    }, []);

    const clearRoute = useCallback(() => {
        setRouteState(false);
    }, []); 
    const invertRoutes = useCallback(() => {
        if(route){
            const size = Object.keys(route.features[0].geometry.coordinates).length;
            for (let index = 0; index < size; index++) {
                route.features[0].geometry.coordinates[index] = route.features[0].geometry.coordinates[index].reverse();
            }
            setPolyline(route.features[0].geometry.coordinates);
            setRouteState(true);
        }
    }, [route]);

    const generateRoute = useCallback(async () => {
        const data = {
            coordinates: [
              [location.coodinates.long, location.coodinates.lat],
              destination
            ]
        }

        axios.post("https://api.openrouteservice.org/v2/directions/driving-car/geojson", data, {
            headers: { Authorization: "5b3ce3597851110001cf6248dff71f54e6254ebd89a9277ee089d97d" },
        }).then((response) => {
            setRouteValue(response.data); 
        } ).catch((error) => {
            console.log(error)
        })
    }, [destination, location.coodinates.lat, location.coodinates.long, setRouteValue]);

    useEffect(() => {
        invertRoutes();
        // console.log("foi", route);
      }, [invertRoutes, route]);

    return {
        generateRoute, route, invertRoutes, routeState, polyline, 
        destination, setDestination, setDState, dState, clearRoute, setRouteState
    }
}

export default useRoutes;