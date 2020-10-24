import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Link,
  Button,
} from '@chakra-ui/core';

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
        <Text className="col-md-10 mx-auto">{description}</Text>
      </Box>
      <Image src={image} h="375px" objectFit="cover" w="full" />
    </Box>
  );
};

export default Banner;
