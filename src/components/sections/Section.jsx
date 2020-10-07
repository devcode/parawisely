import { Box } from '@chakra-ui/core';
import React from 'react';

const Section = ({ children, ...rest }) => {
  return (
    <Box p="5rem" {...rest}>
      {children}
    </Box>
  );
};

export default Section;
