import React from 'react';
import { Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';

import aboutImages from '../assets/images/about-images.png';

const Tentang = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          TENTANG KAMI
        </Text>
        <Heading fontWeight="extra_bold">Tentang Project Parawisely</Heading>
        <Text className="col-md-6 mx-auto">
          Nikmati keindahan negara Indonesia dari layar anda dengan fitur
          Virtual Tour dari Parawisely yang membantu anda untuk menjelajahi
          Indonesia secara online.
        </Text>
      </Stack>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <Image
              h="572px"
              className="mx-auto"
              src={aboutImages}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          TENTANG KAMI
        </Text>
        <Heading fontWeight="extra_bold">Tentang Project Parawisely</Heading>
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
