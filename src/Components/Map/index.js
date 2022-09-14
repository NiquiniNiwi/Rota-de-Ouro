import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.css';
import useGeoLocation from '../../Hooks/Geolocation';

function Map(){
    const ufop = [-20.395580231739956, -43.50994172644795];
    const location = useGeoLocation();

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
      </MapContainer>
    );
}

export default Map;