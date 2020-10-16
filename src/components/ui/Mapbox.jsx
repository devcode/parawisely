import React, { useRef, useState } from 'react';
import ReactMapGL, {
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import { useQuery } from 'react-query';
import Pins from './Pins';
import CityInfo from './CityInfo';

import '../../stylesheets/map.css';

import DATA from '../../data/cities.json';

const navStyle = { padding: '10px', position: 'absolute', right: 0 };
const geolocateStyle = { padding: '10px', position: 'absolute', top: 0 };

const Mapbox = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: -2.68496,
    longitude: 113.95365,
    width: '100vw',
    height: '80vh',
    zoom: 4,
  });

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://parawisely-backend.test/api/travel-place').then(res =>
      res.json()
    )
  );

  const mapRef = useRef();

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

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

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

      {data.data.map((item, index) => (
        <li>{item.name_place}</li>
      ))}
    </div>
  );
};

export default Mapbox;
