import React from 'react';
import Layout from '../components/layouts';

import Banner from '../components/sections/Banner';
import petaWisataImages from '../assets/images/peta-wisata-images.png';
import Mapgl from '../components/ui/Mapgl';

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
            <Mapgl width="100%" height="200px" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;
