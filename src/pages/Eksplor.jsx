import React from 'react';
import { Button, Heading, Icon, Stack, Text } from '@chakra-ui/core';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useQuery } from 'react-query';

import Layout from '../components/layouts';
import Spinner from '../components/ui/Spinner';
import Section from '../components/sections/Section';

import EksplorIMG from '../assets/images/eksplor.jpg';
import ilustrationIMG from '../assets/ilustration/ilus-ekplor.png';
import Banner from '../components/sections/Banner';

import pantaiJson from '../data/pantai-carousel.json';
import LokasiCarousel from '../components/sections/LokasiCarousel';
import CardRekomendasi from '../components/ui/CardRekomendasi';

import { getTypePlace, getEksplorasi } from '../api/fetchData';

const Eksplor = () => {
  const { data, status, error } = useQuery('type-place', getEksplorasi);

  return (
    <Layout>
      <Banner
        title="Ekplor Indonesia"
        description="Di halaman ini anda bisa eksplorasi berbagai macam kategori tempat pariwisata yang sudah kami kelompokan agar lebih mudah anda cari"
        image={EksplorIMG}
      />
      <Section>
        <Stack spacing="1rem">
          {status === 'loading' && <Spinner />}
          {status === 'error' && <div>{error}</div>}
          {status === 'success' && (
            <div>
              {data.data.map((item, index) => {
                return (
                  <LokasiCarousel
                    title={`${item.type_name} di Indonesia`}
                    link={`${item.id}`}
                    data={item.places}
                  />
                );
              })}
            </div>
          )}
        </Stack>
      </Section>

      <CardRekomendasi image={ilustrationIMG}>
        <Stack spacing="1rem" align="start">
          <Heading>Masih bingung cari tempat yang cocok?</Heading>
          <Text>
            Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
            tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
            berikan.
          </Text>
          <Button mt="1rem" background="white" color="blue.800">
            Gabung <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
          </Button>
        </Stack>
      </CardRekomendasi>
    </Layout>
  );
};

export default Eksplor;
