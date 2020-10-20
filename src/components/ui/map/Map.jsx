import React from 'react';
import { Map as MapLeaflet, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };
  const position = [state.lat, state.lng];

  return (
    <div>
      <MapLeaflet center={position} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapLeaflet>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!4v1603137569383!6m8!1m7!1slyzPIlOhj0a01I58zpRpwg!2m2!1d-7.322941135755835!2d108.3126289156769!3f267.51068711876553!4f-22.696471246233557!5f0.7820865974627469" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  );
};

export default Map;
