import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import Section from '../sections/Section';

const Comment = () => {
  return (
    <Section>
      <Box shadow="lg" p="2rem">
        <Heading fontSize="md">Ulasan</Heading>
      </Box>
    </Section>
  );
};

export default Comment;
