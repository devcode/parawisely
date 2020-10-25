import { Heading, Icon, Image, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Banner from '../components/sections/Banner';
import { BsClock, BsBookmarks, BsEye } from 'react-icons/bs';

import wisataDaerahImages from '../assets/images/wisata-daerah-images.png';
import WisataDaerahIMG from '../assets/images/hero.png';
import { Link } from 'react-router-dom';

const WisataDaerah = () => {
  return (
    <Layout>
      <Banner
        title="Wisata Daerah"
        description="Disini anda bisa mencari dan menjelajahi kuliner, budaya, dan tempat pariwisata dari berbagai daerah di indonesa yang dikelompokan tiap provinsi"
        image={wisataDaerahImages}
      />

      <Section>
        <Stack
          direction="row"
          shadow="lg"
          borderRadius="md"
          p={8}
          spacing="2rem"
        >
          <Image
            src={WisataDaerahIMG}
            objectFit="cover"
            h="144px"
            borderRadius="md"
          />
          <Stack align="start" w="60%">
            <Heading fontSize="22px">Pulau jawa</Heading>
            <Text>
              Pulau jawa merupakan pulau yang terbesar sekaligus memiliki banyak
              tempat pariwisata yang beragam yang bisa anda kunjungi.
            </Text>
            <Link>Selengkapnya ...</Link>
          </Stack>
          <Stack>
            <Stack spacing="10px" align="center" direction="row">
              <Icon as={BsClock} />
              <Text>90+ Tempat</Text>
            </Stack>
            <Stack spacing="10px" align="center" direction="row">
              <Icon as={BsBookmarks} />
              <Text>31 asd</Text>
            </Stack>
            <Stack spacing="10px" align="center" direction="row">
              <Icon as={BsEye} />
              <Text> asd</Text>
            </Stack>
          </Stack>
        </Stack>
      </Section>
    </Layout>
  );
};

export default WisataDaerah;
