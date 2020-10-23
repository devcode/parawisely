import React from 'react';
import { Box, Divider, Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Wraper from '../components/layouts/Wraper';

import TentangIMG from '../assets/images/tentang.jpg';

const Tentang = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          TENTANG KAMI
        </Text>
        <Heading fontWeight="extra_bold">Tentang Kami</Heading>
        <Text className="col-md-6 mx-auto">
          Nikmati keindahan negara Indonesia dari layar anda dengan fitur
          Virtual Tour dari Parawisely yang membantu anda untuk menjelajahi
          Indonesia secara online.
        </Text>
      </Stack>
    </Layout>
  );
};

export default Tentang;
