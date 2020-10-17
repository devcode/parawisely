import React from 'react';
import Layout from '../components/layouts';
import Mapbox from '../components/ui/map/Mapbox';

const Map = props => {
  return (
    <Layout mb="20rem">
      <Mapbox />
    </Layout>
  );
};

export default Map;
