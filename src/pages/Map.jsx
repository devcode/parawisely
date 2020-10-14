import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@chakra-ui/core';
import mapboxgl from 'mapbox-gl';
import Layout from '../components/layouts';
import Popup from '../components/ui/Popup';
import '../stylesheets/map.css';

import fetchfakeData from '../api/fetchFakeData';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = props => {
  const mapContainer = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/supryantohehe/ckg9ifl6q011w19n2889icri2',
      center: [106.816666, -6.2],
      zoom: 4,
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    const navigation = new mapboxgl.NavigationControl();

    map.addControl(geolocate, 'bottom-left');
    map.addControl(navigation, 'bottom-right');

    map.on('load', () => {
      geolocate.trigger();

      map.addSource('random-points-data', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      });

      map.addLayer({
        id: 'random-points-layer',
        source: 'random-points-data',
        type: 'symbol',
        layout: {
          'icon-image': 'bakery-15',
          'icon-padding': 0,
          'icon-allow-overlap': true,
        },
      });
    });

    map.on('moveend', async () => {
      const { lng, lat } = map.getCenter();
      const results = await fetchfakeData({ longitude: lng, latitude: lat });
      map.getSource('random-points-data').setData(results);
    });

    map.on('mouseenter', 'random-points-layer', e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer';
      }
    });

    map.on('mouseleave', 'random-points-layer', () => {
      map.getCanvas().style.cursor = '';
    });

    map.on('click', 'random-points-layer', e => {
      if (e.features.length) {
        const feature = e.features[0];
        const popupNode = document.createElement('div');
        ReactDOM.render(<Popup feature={feature} />, popupNode);
        popUpRef.current
          .setLngLat(feature.geometry.coordinates)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    });

    return () => map.remove();
  }, []);

  return (
    <Layout>
      <Box mt="3rem" className="mapContainer" ref={mapContainer} />
    </Layout>
  );
};

export default Map;
