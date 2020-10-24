import React from 'react';
import { Box, Divider, Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Iframe from 'react-iframe';

const pantaiPangandaran = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          VIRTUAL TOUR INDONESIA
        </Text>
        <Heading fontWeight="extra_bold">Pantai Pangandaran Tour</Heading>
        <Text className="col-md-6 mx-auto">
          Nikmati keindahan negara Indonesia dari layar anda dengan fitur
          Virtual Tour dari Parawisely yang membantu anda untuk menjelajahi
          Indonesia secara online.
        </Text>
      </Stack>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 mx-auto">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!4v1603577140317!6m8!1m7!1sljwP45w7tT0tPLVgmCESJQ!2m2!1d-7.696106495718193!2d108.7623427653055!3f228.5764349713264!4f-8.799063603318402!5f0.7820865974627469"
              width="100%"
              height="560px"
              frameborder="0"
              style="border:0;"
              allowfullscreen="true"
              aria-hidden="false"
              tabindex="0"
              id="myId"
              className="myClassname"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default pantaiPangandaran;
