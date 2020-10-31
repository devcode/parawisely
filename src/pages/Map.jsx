import React from 'react';
import Layout from '../components/layouts';
import { Heading, Stack, Text, Button, Icon } from '@chakra-ui/core';
import { IoIosArrowRoundForward } from 'react-icons/io';
// import Mapbox from '../components/ui/map/Mapbox';
import ilustrationIMG from '../assets/ilustration/ilus-ekplor.png';
import CardRekomendasi from '../components/ui/CardRekomendasi';
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
            <Mapgl width="100%" height="480px" />
          </div>
        </div>
      </div>

      <CardRekomendasi image={ilustrationIMG}>
        <Stack spacing="1rem" align="start">
          <Heading>Didaerah kamu ada tempat wisata?</Heading>
          <Text>
            Ayo sini daftarkan tempat daerah kamu agar bisa tereksplor oleh
            masyarakat luas
          </Text>
          <Button mt="1rem" background="white" color="blue.500">
            Gabung <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="3px" />
          </Button>
        </Stack>
      </CardRekomendasi>
    </Layout>
  );
};

export default Map;
