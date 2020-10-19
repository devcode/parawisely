import { Image } from '@chakra-ui/core';
import React, { useRef, useState } from 'react';
import MapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { useQuery } from 'react-query';

import Spinner from '../Spinner';
import Pins from './Pins';
import CityInfo from './CityInfo';

import '../../../stylesheets/map.css';

const apiToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const mapStyle = 'mapbox://styles/supryantowp/ckgfd9g312kjw19pduhgr0n8p';
const baseURL = 'http://parawisely-backend.test/api/travel-place';

const fetchTravelplace = async () => {
  const res = await fetch(baseURL);
  return res.json();
};

const Mapbox = () => {
  const { data, status, error } = useQuery('travel-place', fetchTravelplace);
  const mapRef = useRef();
  const [popInfo, setPopInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: -2.68496,
    longitude: 113.95365,
    zoom: 4,
    bearing: 0,
    pitch: 0,
    width: '100vw',
    height: '100vh',
  });

  const onViewportHandler = viewport => setViewport({ ...viewport });

  const _onClickMarker = city => {
    setPopInfo(city);
  };

  const renderPopup = () => {
    return (
      popInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={parseFloat(popInfo.longitude)}
          latitude={parseFloat(popInfo.latitude)}
          closeOnClick={false}
          onClose={() => setPopInfo(null)}
        >
          <CityInfo info={popInfo} />
        </Popup>
      )
    );
  };

  return (
    <div>
      {status === 'loading' && <Spinner />}

      {status === 'error' && <div>{error}</div>}

      {status === 'success' && (
        <MapGL
          {...viewport}
          mapboxApiAccessToken={apiToken}
          onViewportChange={onViewportHandler}
          ref={mapRef}
          mapStyle={mapStyle}
        >
          <Pins data={data.data} onClick={_onClickMarker} />
          {renderPopup()}

          <div style={{ padding: '20px', position: 'absolute', right: 0 }}>
            <NavigationControl />
          </div>
        </MapGL>
      )}
    </div>
  );
};

export default Mapbox;
