import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.css';

function Map(){
    const ufop = [-20.395580231739956, -43.50994172644795];

    return (
        <MapContainer center={ufop} zoom={10} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={ufop}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
      </MapContainer>
    );
}

export default Map;