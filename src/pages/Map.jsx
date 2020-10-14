import React, { useEffect } from 'react';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwcnlhbnRvaGVoZSIsImEiOiJja2c2ZDdvb3AxMjloMnNxcnRkZGc0NmRvIn0.mUDv0EX90oC4H_1H1vVFGQ';

const Map = () => {
  const state = {
    lng: 5,
    lat: 34,
    zoom: 2,
  };
  return (
    <Layout>
      <Section> </Section>
    </Layout>
  );
};

export default Map;
