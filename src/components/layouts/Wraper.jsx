import React from 'react';
import { Box } from '@chakra-ui/core';

const Wraper = ({ children }) => {
  return (
    <Box
      mx="auto"
      borderRadius="lg"
      shadow="lg"
      bg="white"
      w="80%"
      p={8}
      mt="-200px"
    >
      {children}
    </Box>
  );
};

export default Wraper;
