// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coodinates: {lat: "", long: ""}
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coodinates: {
                lat: location.coords.latitude,
                long: location.coords.longitude,
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
    }
    useEffect(() => {
        if( !("geolocation" in navigator)){
            onError({
                    code: 0,
                    message: "Geolocation not supported",
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])
    return location
}

export default useGeoLocation;