import React from 'react';
import { Flex } from '@chakra-ui/core';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import MobileDrawer from '../ui/MobileDrawer';

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

      <MobileDrawer />
      <Footer />
    </Flex>
  );
};

export default index;
