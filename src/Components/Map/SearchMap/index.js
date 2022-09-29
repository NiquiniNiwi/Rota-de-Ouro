import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import '../../Map/index.css';
import useGeoLocation from '../../../Hooks/Geolocation/index';

function SearchMap({teste, polyline, routeState, dState}){
    const ufop = [-20.395580231739956, -43.50994172644795];
    const location = useGeoLocation();

    const blackOptions = { color: 'black' };
    return (
        <MapContainer center={ufop} zoom={9} scrollWheelZoom={true}>
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
            {dState && <Marker position={[teste[1], teste[0]]}>
                <Popup>
                    {teste}
                </Popup>
            </Marker>}
      </MapContainer>
    );
}

export default SearchMap;