import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import '../../assets/leaflet/leaflet.css';

const Pemetaan = () => {
  const state = {
    lat: -0.2897471,
    lang: 115.0760588,
    zoom: 5,
  };

  const position = [state.lat, state.lang];

  return (
    <Map style={{ width: '100%' }} center={position} zoom={state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};

export default Pemetaan;
