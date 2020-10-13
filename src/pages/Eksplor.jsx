import React from 'react';
import { Button, Heading, Icon, Stack, Text } from '@chakra-ui/core';
import { IoIosArrowRoundForward } from 'react-icons/io';

import Layout from '../components/layouts';
import Section from '../components/sections/Section';

import EksplorIMG from '../assets/images/eksplor.jpg';
import ilustrationIMG from '../assets/ilustration/ilus-ekplor.png';
import Banner from '../components/sections/Banner';

import pantaiJson from '../data/pantai-carousel.json';
import LokasiCarousel from '../components/sections/LokasiCarousel';
import CardRekomendasi from '../components/ui/CardRekomendasi';

const Eksplor = () => {
  return (
    <Layout>
      <Banner
        title="Ekplor Indonesia"
        description="Di halaman ini anda bisa eksplorasi berbagai macam kategori tempat pariwisata yang sudah kami kelompokan agar lebih mudah anda cari"
        image={EksplorIMG}
      />
      <Section>
        <Stack spacing="1rem">
          <LokasiCarousel
            title="Pantai di Indonesia"
            link="/eksplor/pantai"
            data={pantaiJson}
          />
          <LokasiCarousel
            title="Pegunungan di Indonesia"
            link="/eksplor/pegunungan"
            data={pantaiJson}
          />
          <LokasiCarousel
            title="Tempat Bersejarah di Indonesia"
            link="/eksplor/sejarah"
            data={pantaiJson}
          />
          <LokasiCarousel
            title="Kuliner di Indonesia"
            link="/eksplor/sejarah"
            data={pantaiJson}
          />
          <LokasiCarousel
            title="Wahana Aktrasi di Indonesia"
            link="/eksplor/sejarah"
            data={pantaiJson}
          />
        </Stack>
      </Section>

      <CardRekomendasi image={ilustrationIMG}>
        <Heading>Masih bingung cari tempat yang cocok?</Heading>
        <Text>
          Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
          tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
          berikan.
        </Text>
        <Button mt="1rem" background="white" color="blue.800">
          Gabung <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
        </Button>
      </CardRekomendasi>
    </Layout>
  );
};

export default Eksplor;
