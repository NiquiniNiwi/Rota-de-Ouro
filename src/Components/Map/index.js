import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import './index.css';
import useGeoLocation from '../../Hooks/Geolocation/index';
import { useRoutes } from '../../Hooks/Routes';
import { GoldIcon, RedIcon } from '../icon';

function Map(){
    const {dState, routeState, polyline, destination} = useRoutes();
    const ufop = [-20.395580231739956, -43.50994172644795];
    const location = useGeoLocation();

    const lineColor = { color: '#6B0504' };
    return (
        <MapContainer center={ufop} zoom={9} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={GoldIcon} position={[location.coodinates.lat, location.coodinates.long]}>
                <Popup>
                    Sua latitutde é {location.coodinates.lat} <br />
                    Sua longitude é {location.coodinates.long}
                </Popup>
            </Marker>
            {routeState && <Polyline pathOptions={lineColor} positions={polyline}/>}
            {dState && <Marker icon={RedIcon} position={[destination[1], destination[0]]}>
                <Popup>
                    {destination}
                </Popup>
            </Marker>}
      </MapContainer>
    );
}

export default Map;