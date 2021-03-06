import React from 'react';
import { useQuery } from 'react-query';
import {
  Button,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/core';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Banner from '../components/sections/Banner';
import Spinner from '../components/ui/Spinner';
import eksplorasiImages from '../assets/images/eksplorasi-images.png';

import { getPlacebyType } from '../api/fetchData.js';
import { capitalize } from '../utils/helper';

const EksplorCategory = () => {
  const { type } = useParams();
  const { data, status } = useQuery('place-by-type', () =>
    getPlacebyType(type)
  );

  return (
    <Layout>
      <Banner
        title={`${capitalize(type)} Indonesia`}
        description="Di halaman ini anda bisa eksplorasi berbagai macam kategori tempat pariwisata yang sudah kami kelompokan agar lebih mudah anda cari"
        image={eksplorasiImages}
      />
      <Section>
        <Heading>Jelajahi {capitalize(type)} dibawah ini</Heading>
        {status === 'loading' && <Spinner />}
        {status === 'error' && <div>Error</div>}
        {status === 'success' && (
          <SimpleGrid mt="2rem" spacing="2rem" columns={5}>
            {!data.data && <div>kosong</div>}
            {data.data[0] &&
              data.data[0].places.map((item, index) => (
                <Stack key={`lksdl${index}`} shadow="lg">
                  <Image
                    h="272px"
                    objectFit="cover"
                    borderRadius="lg"
                    src={eksplorasiImages}
                  />
                  <Stack spacing="0.5rem" p={2}>
                    <Heading size="sm">{item.name_place}</Heading>
                    <Stack align="center" direction="row" spacing="5px">
                      <Icon as={FaMapMarkerAlt} />
                      <Text fontSize="13px">{item.provinsi}</Text>
                    </Stack>
                    <Link to={`/place/${item.slug}`} d="block">
                      <Button size="sm" colorScheme="blue" w="full">
                        Selengkapnya
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              ))}
          </SimpleGrid>
        )}
      </Section>
    </Layout>
  );
};

export default EksplorCategory;
