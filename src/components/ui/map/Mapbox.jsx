import React, { useRef, useState } from 'react';
import ReactMapGL, {
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import Pins from './Pins';
import CityInfo from './CityInfo';
import DATA from '../../../data/regencies.json';

import '../../../stylesheets/map.css';

const navStyle = { padding: '10px', position: 'absolute', right: 0 };
const geolocateStyle = { padding: '10px', position: 'absolute', top: 0 };

const Mapbox = () => {
  const mapRef = useRef();
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: -2.68496,
    longitude: 113.95365,
    width: '100vw',
    height: '80vh',
    zoom: 4,
  });

  const _onClickMarker = city => {
    setPopupInfo(city);
  };

  const _renderPopup = () => {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        maxZoom={20}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={newViewport => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
        mapStyle="mapbox://styles/supryantohehe/ckg9ifl6q011w19n2889icri2"
      >
        <Pins data={DATA} onClick={_onClickMarker} />

        {_renderPopup()}

        <div style={navStyle}>
          <NavigationControl />
        </div>

        <div style={geolocateStyle}>
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </div>
      </ReactMapGL>
    </div>
  );
};

export default Mapbox;