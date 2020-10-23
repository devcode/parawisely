import React from 'react';
import { Box, Divider, Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Iframe from 'react-iframe';

const danauToba = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          VIRTUAL TOUR INDONESIA
        </Text>
        <Heading fontWeight="extra_bold">Danau Toba Tour</Heading>
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
              url="https://www.google.com/maps/embed?pb=!4v1603401869596!6m8!1m7!1sDYcqf5SXMwQUn9UudIuysg!2m2!1d2.728771736258714!2d98.64112232858974!3f163.3508785234138!4f-15.146623895923!5f0.7820865974627469"
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

export default danauToba;
