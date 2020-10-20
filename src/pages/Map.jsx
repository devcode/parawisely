import React from 'react';
import Iframe from 'react-iframe';
import Layout from '../components/layouts';
import Mapbox from '../components/ui/map/Mapbox';

const Map = props => {
  return (
    <Layout mb="20rem">
      <Mapbox />
      {/* <Iframe url="https://www.google.com/maps/embed?pb=!4v1603145142876!6m8!1m7!1sxJgLxAhHCcBDwi958iaMyQ!2m2!1d-7.607604240075657!2d110.2035745755546!3f94.97373478611713!4f-10.712985503932217!5f0.7820865974627469" width="1240" height="500" frameborder="0" style="border:0;" allowfullscreen="yes" aria-hidden="false" tabindex="0"
        width="100%"
        id="myId"
        className="myClassname"
        position="relative"/> */}
    </Layout>
  );
};

export default Map;
