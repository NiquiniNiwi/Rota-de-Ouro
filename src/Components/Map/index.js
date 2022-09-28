import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import './index.css';
import useGeoLocation from '../../Hooks/Geolocation';
import { useEffect } from 'react';

function Map({polyline, routeState, destino}){
    const ufop = [-20.395580231739956, -43.50994172644795];
    const location = useGeoLocation();

    const blackOptions = { color: 'black' };

    useEffect(() => {
        
    }, []);
    return (
        <MapContainer center={ufop} zoom={12} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.coodinates.lat, location.coodinates.long]}>
                <Popup>
                    Sua latitutde é {location.coodinates.lat} <br />
                    Sua longitude é {location.coodinates.long}
                </Popup>
            </Marker>
            {routeState && <Polyline pathOptions={blackOptions} positions={polyline}/>}
            <Marker position={[-20.2481745,-43.8043936]}>
                <Popup>
                    Destino
                </Popup>
            </Marker>
      </MapContainer>
    );
}

export default Map;