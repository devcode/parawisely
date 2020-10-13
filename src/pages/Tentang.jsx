import React from 'react';
import { Box, Divider, Heading, Image, Text } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Wraper from '../components/layouts/Wraper';

import TentangIMG from '../assets/images/tentang.jpg';

const Tentang = () => {
  return (
    <Layout>
      <Image h="572px" src={TentangIMG} objectFit="cover" />
      <Wraper>
        <Box textAlign="center" mx="auto" w="70%">
          <Heading>Parawisely</Heading>
          <Text>
            Parawisely merupakan agen travel yang bergerak di bidang pariwisata
            Indonesia yang didukung penuh oleh kementrian pariwisatan dan
            ekonomi kreatif Indonesia
          </Text>
        </Box>
        <Divider my="2rem" />
        <Box bg="gray.300" h="350px"></Box>
      </Wraper>
    </Layout>
  );
};

export default Tentang;
