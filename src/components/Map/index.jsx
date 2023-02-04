import React from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

import { LocationMarker } from '../LocationMarker/LocationMarker';

import styles from './Map.module.scss';

const Map = ({ address }) => {
  const hasProps = Object.keys(address).length;

  if (hasProps) {
    return (
      <MapContainer
        className={styles.mapContainer}
        center={[address.location.lat, address.location.lng]}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          lat={address.location.lat}
          lng={address.location.lng}
          name={address.as?.name}
        />
      </MapContainer>
    );
  } else {
    return null;
  }
};

export default Map;
