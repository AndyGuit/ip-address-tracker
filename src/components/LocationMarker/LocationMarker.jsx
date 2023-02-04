import { Marker, Popup, useMap } from 'react-leaflet';
import { iconLocation } from './Icon';

export const LocationMarker = ({ lat, lng, name }) => {
  const map = useMap({});
  map.setView([lat, lng]);
  return (
    <Marker icon={iconLocation} position={[lat, lng]}>
      <Popup>{name}</Popup>
    </Marker>
  );
};
