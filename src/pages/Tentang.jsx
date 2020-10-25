import React from 'react';
import { Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';

import aboutImages from '../assets/images/about-images.png';

const Tentang = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Heading
          className="col-md-8 mx-auto"
          fontSize="48px"
          lineHeight="56px"
          fontWeight="extra_bold"
        >
          Membuat liburan anda di Indonesia menjadi lebih seru dan berkesan!
        </Heading>
      </Stack>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Image
              h="572px"
              className="mx-auto"
              src={aboutImages}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 mt-5 mx-auto">
          <Text
            fontSize="20px"
            lineHeight="31px"
            textAlign="center"
            fontWeight="regular"
          >
            Convertedin is the first Customer Marketing Platform for Retailers
            that work in auto-pilot mode
            <br />
            <br />
            We created a Customer Marketing Platform that unifies all customer
            data from different retailer touchpoints: Pixels, Mobile apps (via
            SDK), CRM Integration, APIs.
            <br />
            <br />
            Convertedin segments all these customers & their data using AI to
            create look-a-like audiences to expand your audiences, you will be
            able to create campaigns & optimize them on autopilot using AI.
          </Text>
        </div>
      </div>
    </Layout>
  );
};

export default Tentang;
