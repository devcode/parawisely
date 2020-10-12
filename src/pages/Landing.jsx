import {
  Button,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  IconButton,
  Divider,
  SimpleGrid,
} from '@chakra-ui/core';
import React from 'react';
import Layout from '../components/layouts';
import ReactPlayer from 'react-player';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { RiMapPinAddFill, RiHeart3Fill, RiUserStarLine } from 'react-icons/ri';

import PesonaIndoVideo from '../assets/video/pesona-indonesia.mp4';
import AirTerjun from '../assets/images/air-terjun.jpg';
import Bali from '../assets/images/bali.jpg';
import RajaAmpat from '../assets/images/raja-ampat.jpg';
import Yosemite from '../assets/images/yosemite.jpg';
import Pemetaan from '../components/ui/Pemetaan';
import Section from '../components/sections/Section';

import AirnbLogo from '../assets/logo/airnb.png';
import FedexLogo from '../assets/logo/fedex.png';
import GoogleLogo from '../assets/logo/google.png';
import HubspotLogo from '../assets/logo/hubspot.png';
import MicrosoftLogo from '../assets/logo/microsoft.png';
import WalmartLogo from '../assets/logo/walmart.png';
import { Hero } from '../components/sections/Hero';
import Destinasi from '../components/sections/Destinasi';

const Kelebihan = ({ total, title }) => (
  <Box>
    <Heading>{total}</Heading>
    <Text>{title}</Text>
    <Divider w="full" style={{ height: '3px', backgroundColor: '#000' }} />
  </Box>
);

const Feature = ({ title, description, icon }) => (
  <Stack spacing="1rem" direction="row">
    <IconButton icon={icon} isRound size="md" />
    <Box>
      <Heading size="sm">{title}</Heading>
      <Text size="xs">{description}</Text>
    </Box>
  </Stack>
);

const Landing = () => {
  return (
    <Layout>
      <Hero />

      <Stack p={['2rem', '2rem', '2rem', '5rem']} spacing="2rem">
        <Heading
          sizes={['sm', 'sm', 'sm', 'xl']}
          w={['full', 'full', 'full', '60%']}
        >
          Peta Pariwisata <br /> Negara Republik Indonesia
        </Heading>

        {/* <Box h="400px" w="full" bg="gray.300" mb="1.3rem"></Box> */}
        <Pemetaan />

        <SimpleGrid
          justify="center"
          columns={[1, 1, 1, 3]}
          spacing="2rem"
          mt="2rem"
        >
          <Feature
            title="Populer di Indonesia"
            description="Tempat pariwisata yang populer dan pasti dikenal semua orang di Indonesia"
            icon={<RiMapPinAddFill />}
          />
          <Feature
            title="Favorit di Indonesia"
            description="Tempat favorit dan disukai semua orang Indonesia maupun para wisatawan"
            icon={<RiHeart3Fill />}
          />
          <Feature
            title="Ramai di Indonesia"
            description="Spot yang paling ramai dikunjungi para wisatawan sekaligus warga Indonesia"
            icon={<RiUserStarLine />}
          />
        </SimpleGrid>
      </Stack>

      <Section>
        <SimpleGrid
          columns={[1, 1, 1, 4]}
          spacing="2rem"
          justify="space-between"
        >
          <Kelebihan total="90+" title="Prestasi Daerah" />
          <Kelebihan total="100k+" title="Turis Pertahun" />
          <Kelebihan total="900+" title="Tempat Pariwisata" />
          <Kelebihan total="500k+" title="Wisatawan Puas" />
        </SimpleGrid>
      </Section>

      <Section>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={5}>
          <Heading sizes={['sm', 'sm', 'sm', 'xl']}>
            Jelajahi Indonesia lewat video dibawah
          </Heading>
          <Text>
            Video ini dibuat oleh pihak Pesona Indonesia dalam rangka
            memperingati hari pariwisata dunia 2020, Mari bersama jelajahi
            Indonesia dalam video singkat berikut!
          </Text>
        </SimpleGrid>

        <Box mt="3rem">
          <ReactPlayer url={PesonaIndoVideo} width="100%" height="40%" />
        </Box>
      </Section>

      <Section>
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          alignItems="center"
          spacing={['1rem', '1rem', '1rem', '5rem']}
        >
          <Image
            src={Bali}
            w="540px"
            h="540px"
            objectFit="cover"
            borderRadius="md"
            shadow="md"
          />
          <Stack spacing="1rem" align="start">
            <Heading fontSize={['30px', '30px', '30px', '40px']}>
              Keindahan alam yang diakui dunia
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </Text>
            <Button colorScheme="purple" variant="ghost">
              Get Started
              <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
            </Button>
          </Stack>
        </SimpleGrid>
      </Section>

      <Section>
        <Destinasi />
      </Section>

      <Section mt="-100px" mx="auto" w={['full', 'full', 'full', '80%']}>
        <Stack textAlign="center" spacing="0.7rem" mb="10px">
          <Heading fontSize={['24px', '24px', '24px', '56px']}>
            Jelajahi Keberagaman dan Keseruan budaya indonesia
          </Heading>
          <Text fontSize={['14px', '14px', '14px', '18px']}>
            Telurusuri keindahan dan keberagaman berbagai budaya negara
            Indonesia bersama dengan kami anda bisa menikmati indahnya negara
            Indonesia
          </Text>
        </Stack>
        <SimpleGrid
          mx="auto"
          w={['full', 'full', 'full', '50%']}
          spacing="1rem"
          columns={[1, 1, 1, 2]}
        >
          <Button colorScheme="blue">Ekporasi</Button>
          <Button colorScheme="blue">Rekomendasi</Button>
        </SimpleGrid>
      </Section>

      <Section h="302px" mb="5rem">
        <Stack
          justify="space-between"
          align="center"
          direction="row"
          background="purple.800"
          color="white"
          borderRadius="lg"
        >
          <Box p="3rem">
            <Heading size="xl">Bergabung bersama komunitas wisatawan</Heading>
            <Button mt="1rem" background="white" color="purple.800">
              Gabung{' '}
              <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
            </Button>
          </Box>
          <Image
            borderLeftRadius="full"
            src={RajaAmpat}
            h="300px"
            objectFit="cover"
          />
        </Stack>
      </Section>

      <Section>
        <Divider />
        <Stack direction="row" spacing="3rem" justify="center" my="2rem">
          <Image objectFit="contain" src={AirnbLogo} />
          <Image objectFit="contain" src={FedexLogo} />
          <Image objectFit="contain" src={GoogleLogo} />
          <Image objectFit="contain" src={HubspotLogo} />
          <Image objectFit="contain" src={MicrosoftLogo} />
          <Image objectFit="contain" src={WalmartLogo} />
        </Stack>
        <Divider />
      </Section>
    </Layout>
  );
};

export default Landing;
