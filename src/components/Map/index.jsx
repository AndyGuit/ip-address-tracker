import React from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

import { LocationMarker } from '../LocationMarker/LocationMarker';

import local from '../../country.json';

import styles from './Map.module.scss';

const Map = props => {
  const hasProps = Object.keys(props).length;

  if (hasProps) {
    return (
      <MapContainer
        className={styles.mapContainer}
        center={[props.location.lat, props.location.lng]}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          lat={props.location.lat}
          lng={props.location.lng}
          name={props.as.name}
        />
      </MapContainer>
    );
  } else {
    return null;
  }
};

export default Map;
