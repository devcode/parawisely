import React from 'react';
import Layout from '../components/layouts';
import Mapbox from '../components/ui/map/Mapbox';
import Banner from '../components/sections/Banner';
import petaWisataImages from '../assets/images/peta-wisata-images.png';

const Map = props => {
  return (
    <Layout mb="20rem">
      <Banner
        title="Peta Wisata"
        description="Beranda &nbsp; →  &nbsp; Peta Wisata"
        image={petaWisataImages}
      />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 mx-auto">
            <Mapbox width="100%" height="480px" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;
