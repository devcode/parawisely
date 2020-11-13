import { Heading } from '@chakra-ui/core';
import React from 'react';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';

const NotFound = () => (
  <Layout>
    <Section>
      <Heading as="h4">Not found</Heading>
    </Section>
  </Layout>
);

export default NotFound;
