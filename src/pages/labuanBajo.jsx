import React from 'react';
import { Box, Divider, Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Iframe from 'react-iframe';

const labuanBajo = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          VIRTUAL TOUR INDONESIA
        </Text>
        <Heading fontWeight="extra_bold">Labuan Bajo Tour</Heading>
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
              url="https://www.google.com/maps/embed?pb=!4v1603576293663!6m8!1m7!1sNg6zr9uApxMXkYDFtipnNw!2m2!1d-8.46958987452089!2d119.8753516475672!3f169.93557238151473!4f-14.59345033619472!5f0.7820865974627469"
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

export default labuanBajo;
