import React from 'react';
import { Box, Divider, Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Wraper from '../components/layouts/Wraper';

import aboutImages from '../assets/images/about-images.png';

const Tentang = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Heading fontSize="61px" lineHeight="73px" fontWeight="extra_bold">
          Halo, Kami Adalah <span className="span-color">Parawisely</span>.
        </Heading>
      </Stack>
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
