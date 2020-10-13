import React from 'react';
import { Box, Image, Flex, Spacer } from '@chakra-ui/core';
import Section from '../sections/Section';

const CardRekomendasi = ({
  title,
  description,
  image,
  isRadius = false,
  children,
}) => {
  return (
    <Section>
      <Flex borderRadius="lg" bg="blue.500" color="white">
        <Box p={10} w="100%">
          {children}
        </Box>
        <Spacer />
        <Box w="70%" h="full">
          <Image
            borderLeftRadius={isRadius ? 'full' : '0'}
            h="auto"
            src={image}
          />
        </Box>
      </Flex>
    </Section>
  );
};

export default CardRekomendasi;
