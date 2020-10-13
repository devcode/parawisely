import { Image } from '@chakra-ui/core';
import React from 'react';

import Layout from '../components/layouts';

import EksplorIMG from '../assets/images/eksplor.jpg';

const Eksplor = () => {
  return (
    <Layout>
      <Image
        src={EksplorIMG}
        h="375px"
        objectPosition="center"
        objectFit="cover"
      />
    </Layout>
  );
};

export default Eksplor;
