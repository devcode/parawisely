import ReactDOM from 'react-dom';
import React, { useRef, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/core';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import Layout from '../layouts';

import Popup from './Popup';
import '../../stylesheets/map.css';
import { getMap } from '../../api/fetchData';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Mapgl = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: process.env.REACT_APP_MAPBOX_STYLE_MAP,
      center: [113.95365, -2.68496],
      zoom: 4,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      countries: 'id',
      language: 'id',
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    map.on('load', async () => {
      geolocate.trigger();
      const res = await getMap();
      console.log({ res });
      // add the data source for new a feature collection with no features
      map.addSource('random-points-data', {
        type: 'geojson',
        data: res,
      });
      // now add the layer, and reference the data source above by name

      map.addLayer({
        id: 'random-points-layer',
        source: 'random-points-data',
        type: 'symbol',
        layout: {
          // full list of icons here: https://labs.mapbox.com/maki-icons
          'icon-image': ['get', 'icon'],
          'icon-padding': 0,
          'icon-allow-overlap': true,
        },
      });
    });

    // change cursor to pointer when user hovers over a clickable feature
    map.on('mouseenter', 'random-points-layer', e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer';
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on('mouseleave', 'random-points-layer', () => {
      map.getCanvas().style.cursor = '';
    });

    // add popup when user clicks a point
    map.on('click', 'random-points-layer', e => {
      if (e.features.length) {
        const feature = e.features[0];
        // create popup node
        const popupNode = document.createElement('div');
        ReactDOM.render(<Popup feature={feature} />, popupNode);
        // set popup on map
        popUpRef.current
          .setLngLat(feature.geometry.coordinates)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    map.addControl(geolocate, 'top-left');
    map.addControl(geocoder);
    geolocate.on('geolocate', e => {
      map.setMaxZoom(8);
    });

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Mapgl;
