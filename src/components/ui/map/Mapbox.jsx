import React, { createRef, useRef, useState } from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  GeolocateControl,
  Source,
  Layer,
} from 'react-map-gl';
import {
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from './Layers';
import Pins from './Pins';
import CityInfo from './CityInfo';
import DATA from '../../../data/regencies.json';
import '../../../stylesheets/map.css';

const apiToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const mapStyle = 'mapbox://styles/supryantohehe/ckg9ifl6q011w19n2889icri2';
const navStyle = { padding: '15px', position: 'absolute', right: 0 };
const geolocateStyle = { padding: '15px', position: 'absolute', top: 0 };

const Mapbox = () => {
  const mapRef = useRef();
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: -2.68496,
    longitude: 113.95365,
    zoom: 4,
    bearing: 0,
    pitch: 0,
  });

  const _onClickMarker = city => {
    setPopupInfo(city);
  };

  const _onViewportChange = viewport => setViewport({ viewport });

  const _onClick = e => {
    const feature = e.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = this._sourceRef.current.getSource();

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      _onViewportChange({
        ...viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500,
      });
    });
  };

  const _sourceRef = createRef();

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
      <MapGL
        interactiveLayerIds={[clusterLayer.id]}
        onClick={_onClick}
        width="100vw"
        height="80vh"
        {...viewport}
        maxZoom={20}
        mapboxApiAccessToken={apiToken}
        onViewportChange={newViewport => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
        mapStyle={mapStyle}
      >
        <Source
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
          ref={_sourceRef}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
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
      </MapGL>
    </div>
  );
};

export default Mapbox;
