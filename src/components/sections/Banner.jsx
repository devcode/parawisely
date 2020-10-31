import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/core';

import BannerDefault from '../../assets/images/danau-toba.jpeg';

const asset = process.env.REACT_APP_BACKEND_ASSET;

const Banner = ({ title, description, image }) => {
  return (
    <Box color="white" position="relative" textAlign="center">
      <Box
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        position="absolute"
      >
        <Heading>{title}</Heading>
        <Text fontSize="14px" className="col-md-10 mt-1 mx-auto">
          {description}
        </Text>
      </Box>
      <Image
        src={`${asset}/island/${image}`}
        h="300px"
        objectFit="cover"
        w="full"
        fallbackSrc={BannerDefault}
      />
    </Box>
  );
};

export default Banner;
