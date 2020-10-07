import { Box, Heading, Image } from '@chakra-ui/core';
import React from 'react';

import Layout from '../components/layouts';
import Wraper from '../components/layouts/Wraper';

import EksplorIMG from '../assets/images/eksplor.jpg';

const Eksplor = () => {
  return (
    <Layout>
      <Image h="572px" objectFit="cover" src={EksplorIMG} />
      <Wraper>
        <Box textAlign="center" w="70%" mx="auto">
          <Heading>Kategori Wisata</Heading>
        </Box>
      </Wraper>
    </Layout>
  );
};

export default Eksplor;
