import React from 'react';
import { Button, Heading, Icon, Stack, Text } from '@chakra-ui/core';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useQuery } from 'react-query';

import Layout from '../components/layouts';
import Spinner from '../components/ui/Spinner';
import Section from '../components/sections/Section';

import eksplorasiImages from '../assets/images/eksplorasi-images.png';
import ilustrationIMG from '../assets/ilustration/ilus-ekplor.png';
import Banner from '../components/sections/Banner';

import LokasiCarousel from '../components/sections/LokasiCarousel';
import CardRekomendasi from '../components/ui/CardRekomendasi';

import { getEksplorasi } from '../api/fetchData';

const Eksplor = () => {
  const { data, status, error } = useQuery('type-place', getEksplorasi);

  return (
    <Layout>
      <Banner
        title="Ekplorasi Indonesia"
        description="Di halaman ini anda bisa bereksplorasi berbagai macam kategori tempat pariwisata yang sudah kami kelompokan agar lebih mudah anda cari."
        image={eksplorasiImages}
      />
      <Section>
        <Stack spacing="1rem">
          {status === 'loading' && <Spinner />}
          {status === 'error' && <div>{error}</div>}
          {status === 'success' && (
            <div>
              {data.data.map((item, index) => {
                if (item.places.length > 0) {
                  return (
                    <LokasiCarousel
                      key={item.id}
                      title={`Wisata ${item.type_name} di Indonesia`}
                      slug={item.slug}
                      type_name={item.type_name}
                      link={`eksplorasi/${item.slug}`}
                      data={item.places}
                    />
                  );
                } else {
                  return <div key={`wtf-${index}`}></div>;
                }
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
