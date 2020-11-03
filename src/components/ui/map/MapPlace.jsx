import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapPlace = ({ longitude = 113.95365, latitude = -2.68496 }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: process.env.REACT_APP_MAPBOX_STYLE_MAP,
      center: [longitude, latitude],
      zoom: 8,
    });

    var marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    return () => map.remove();
  }, [latitude, longitude]);

  return <div className="map-container-detail" ref={mapContainer} />;
};

export default MapPlace;
