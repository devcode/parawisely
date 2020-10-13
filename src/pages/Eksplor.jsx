import { Box, Heading, Image, Text } from '@chakra-ui/core';
import React from 'react';

import Layout from '../components/layouts';

import EksplorIMG from '../assets/images/eksplor.jpg';

const Eksplor = () => {
  return (
    <Layout>
      <Box color="white" position="relative" textAlign="center">
        <Box
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          position="absolute"
        >
          <Heading>Eksplor Indonesia</Heading>
          <Text>
            Di halaman ini anda bisa eksplorasi berbagai macam kategori tempat
            pariwisata yang sudah kami kelompokan agar lebih mudah anda cari
          </Text>
        </Box>
        <Image src={EksplorIMG} h="375px" objectFit="cover" w="full" />
      </Box>
    </Layout>
  );
};

export default Eksplor;
