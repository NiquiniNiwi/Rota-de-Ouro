import { useState, useCallback, useEffect } from "react";
import useGeoLocation from "../Geolocation";

const useRoutes = () => {
    const location = useGeoLocation();
    const [route, setRoute] = useState("");
    const [routeState, setRouteState] = useState(false);
    const [polyline, setPolyline] = useState([]);


    const setRouteValue = useCallback((value) => {
        setRoute(value);
    }, []);

    const generateRoute = useCallback(async () => {
        let request = new XMLHttpRequest();
        request.open('POST', "https://api.openrouteservice.org/v2/directions/driving-car/geojson");

        request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Authorization', '5b3ce3597851110001cf6248dff71f54e6254ebd89a9277ee089d97d');
    
        request.onreadystatechange = function () {
        if (this.readyState === 4) {
            // console.log('Status:', this.status);
            // console.log('Headers:', this.getAllResponseHeaders());
            // console.log('Body:', this.response);
    
            setRouteValue(JSON.parse(this.response));
        }
        };
     
        const body = `{"coordinates":[[${location.coodinates.long},${location.coodinates.lat}],[-43.8043936,-20.2481745]]}`;
    
        request.send(body);

    }, [location.coodinates.lat, location.coodinates.long, setRouteValue]);

    const invertRoutes = useCallback(() => {
        if(route !== ""){
            const size = Object.keys(route.features[0].geometry.coordinates).length;
            for (let index = 0; index < size; index++) {
                route.features[0].geometry.coordinates[index] = route.features[0].geometry.coordinates[index].reverse();
            }
            // console.log(route.features[0].geometry.coordinates);
            setPolyline(route.features[0].geometry.coordinates);
            setRouteState(true);
        }
    }, [route]);

    useEffect(() => {
        
      }, []);

    return {generateRoute, route, invertRoutes, routeState, polyline}
}

export default useRoutes;