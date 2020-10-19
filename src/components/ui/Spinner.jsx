import React from 'react';
import { Box } from '@chakra-ui/core';
import '../../stylesheets/spinner.css';

const Spinner = () => {
  return (
    <Box h="100vh">
      <div className="loader"></div>
    </Box>
  );
};

export default Spinner;
