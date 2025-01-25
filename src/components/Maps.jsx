import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/** @param {{ center: [number, number] }} props */
const CenterMap = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

/** @param {{markers:directionList[], zoomMark:number[]}} props */
export const Maps = ({ markers, zoomMark }) => {
  /**@type {[number,number]} */
  const center =
    Array.isArray(zoomMark) && zoomMark.length === 2
      ? [zoomMark[0], zoomMark[1]]
      : [markers[0].coordinates[0], markers[0].coordinates[1]];

  return (
    <div className="relative w-full h-96 z-0 lg:w-3/5 lg:h-full">
      <MapContainer
        center={center}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
       <Marker position={center}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
      </MapContainer>
    </div>
  );
};
