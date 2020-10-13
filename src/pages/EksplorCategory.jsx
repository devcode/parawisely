import React from 'react';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Banner from '../components/sections/Banner';
import { FaMapMarkerAlt } from 'react-icons/fa';

import EksplorIMG from '../assets/images/eksplor.jpg';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/core';

const EksplorCategory = () => {
  const { category } = useParams();
  return (
    <Layout>
      <Banner
        title={`${category} Indonesia`}
        description="Di halaman ini anda bisa eksplorasi berbagai macam kategori tempat pariwisata yang sudah kami kelompokan agar lebih mudah anda cari"
        image={EksplorIMG}
      />
      <Section>
        <Heading>Jelajahi {category} dibawah ini</Heading>
        <SimpleGrid mt="2rem" columns={5}>
          <Stack shadow="lg">
            <Image
              h="272px"
              objectFit="cover"
              borderRadius="lg"
              src={EksplorIMG}
            />
            <Stack spacing="0.5rem" p={2}>
              <Heading size="sm">Pantai Pangandaran</Heading>
              <Stack align="center" direction="row" spacing="5px">
                <Icon as={FaMapMarkerAlt} />
                <Text fontSize="13px">Pangandaran, Jawa Barat</Text>
              </Stack>
              <Stack spacing="4px" direction="row">
                <Button size="sm" colorScheme="green">
                  4.5
                </Button>
                <Button size="sm" colorScheme="blue" w="full">
                  Selengkapnya
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Section>
    </Layout>
  );
};

export default EksplorCategory;
