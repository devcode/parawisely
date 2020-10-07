import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Wraper from '../components/layouts/Wraper';

import TentangIMG from '../assets/images/tentang.jpg';

const Tentang = () => {
  return (
    <Layout>
      <Image h="572px" src={TentangIMG} objectFit="cover" />
      <Wraper>
        <Box textAlign="center" mx="auto" w="70%">
          <Heading>Tentang Kami</Heading>
        </Box>
      </Wraper>
    </Layout>
  );
};

export default Tentang;
