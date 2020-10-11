import React from 'react';
import { Flex } from '@chakra-ui/core';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const index = props => {
  return (
    <Flex
      direction="column"
      // maxW={{ xl: '1200px' }}
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}

      <Footer />
    </Flex>
  );
};

export default index;
