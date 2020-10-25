import React from 'react';
import { Heading, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Iframe from 'react-iframe';

const rajaAmpat = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          VIRTUAL TOUR INDONESIA
        </Text>
        <Heading fontWeight="extra_bold">Raja Ampat Tour</Heading>
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
              url="https://www.google.com/maps/embed?pb=!4v1603576988641!6m8!1m7!1sCAoSLEFGMVFpcE5FWGdOeUt2VXpuclBId2VYVl9aTUNQcHZEX0VRamYzZ05UdHlE!2m2!1d-2.221012!2d130.4646514!3f281.4705836801708!4f-25.473061987473145!5f0.4000000000000002"
              width="100%"
              height="560px"
              frameborder="0"
              style={{ border: 0 }}
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

export default rajaAmpat;
