import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 

export const Maps = () => {
  return (
    <div className="relative w-full h-96 z-0">

      <MapContainer
        center={[-37.999652, -57.546397]}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full" 
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-37.999652, -57.546397]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
