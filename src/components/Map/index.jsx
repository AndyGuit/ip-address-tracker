import React from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { iconLocation } from './Icon';

import local from '../../country.json';

import styles from './Map.module.scss';

const position = [51.505, -0.09];

const Map = props => {
  console.log(props);
  return (
    <MapContainer
      className={styles.mapContainer}
      center={[local.location.lat, local.location.lng]}
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={iconLocation}
        position={[local.location.lat, local.location.lng]}>
        <Popup>{local.as.name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
