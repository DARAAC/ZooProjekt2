import React from 'react';
import Navigation from "./Navigation.jsx";
{/*import {
    MapContainer,
    TileLayer,
} from 'https://cdn.esm.sh/react-leaflet'

*/}
function Map() {
   // const position = [47.384558308396365, 8.574392906925931];

    return (
        <div className="map">
            <Navigation></Navigation>
            <div className="logo">
                <img src="src/assets/logo.png" alt="Zoo Logo" />
            </div>
            <h3>Zoo Karte & Anreise</h3>

            { /*<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>,*/}

            <div className="map-image">
                <img src="src/assets/map.png" alt="Statische Zoo Karte" style={{ width: '50%', marginTop: '10px' }} />
            </div>
        </div>
    );
}

export default Map;
