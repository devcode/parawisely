import { Box } from '@chakra-ui/core';
import React from 'react';

const Section = ({ children, ...rest }) => {
  return (
    <Box p={['2rem', '2rem', '3rem', '5rem']} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
