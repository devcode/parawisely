import React from 'react';
import { Box, Divider, Heading, Image, Text } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Wraper from '../components/layouts/Wraper';

import TentangIMG from '../assets/images/tentang.jpg';

const candiBorobudur = () => {
  return (
    <Layout>
      <Image h="572px" src={TentangIMG} objectFit="cover" />
      <Wraper>
        <Box textAlign="center" mx="auto" w="70%">
          <Heading>KONTOL</Heading>
          <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        </Box>
        <Divider my="2rem" />
        <Box bg="gray.300" h="350px"></Box>
      </Wraper>
    </Layout>
  );
};

export default candiBorobudur;
