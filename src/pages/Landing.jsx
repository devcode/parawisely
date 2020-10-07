import {
  Button,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Center,
  IconButton,
  Divider,
  Icon,
} from '@chakra-ui/core';
import React from 'react';
import Layout from '../components/layouts';
import ReactPlayer from 'react-player';
import {
  IoIosRibbon,
  IoIosArrowDown,
  IoIosBookmark,
  IoIosPeople,
  IoIosArrowRoundForward,
} from 'react-icons/io';

import PesonaIndoVideo from '../assets/video/pesona-indonesia.mp4';
import HeroIMG from '../assets/images/hero.png';
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

const Kelebihan = ({ total, title }) => (
  <Box>
    <Heading>{total}</Heading>
    <Text>{title}</Text>
    <Divider />
  </Box>
);

const Feature = ({ title, description, icon, ...rest }) => (
  <Stack spacing="1rem" direction="row">
    <IconButton
      as={icon}
      color="primary.800"
      variant="ghost"
      isRound
      size="sm"
    />
    <Box>
      <Heading size="sm">{title}</Heading>
      <Text size="xs">{description}</Text>
    </Box>
  </Stack>
);

const Galeri = ({ name, location, image, ...rest }) => (
  <Box>
    <Image
      src={image}
      h="361px"
      w="261px"
      objectFit="cover"
      borderRadius="lg"
      shadow="lg"
    />
    <Box
      position="relative"
      w="60%"
      p="1rem"
      top={-86}
      borderTopRightRadius="lg"
      style={{
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.7)',
      }}
    >
      <Heading size="md">{name}</Heading>
      <Text color="gray.600">{location}</Text>
    </Box>
  </Box>
);

const Landing = () => {
  return (
    <Layout>
      <Stack direction="row" align="center">
        <Box p="5rem">
          <Text
            marginBottom="0.3rem"
            fontWeight="600"
            fontFamily="Inter"
            fontSize="sm"
            lineHeight="28px"
            letterSpacing="-0.4px"
          >
            Parawisely Present
          </Text>
          <Heading
            color="primary.800"
            fontFamily="inter"
            fontWeight="700"
            fontSize={['36px', '36px', '48px', '64px']}
            lineHeight={['34px', '34px', '44px', '62px']}
            letterSpacing="-2.4px"
          >
            Rasakan kenyamanan dan keindahan negara Republik Indonesia
          </Heading>
          <Text
            fontFamily="Inter"
            fontWeight="400"
            size="20px"
            lineHeight="28px"
            letterSpacing="-0.4px"
            width="556.46px"
            height="85.36px"
            mt="1rem"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </Text>
          <Stack direction="row">
            <Button
              colorScheme="purple"
              variant="solid"
              size="lg"
              fontSize="18px"
              lineHeight="22px"
              fontFamily="Inter"
            >
              Get Started
            </Button>
            <Button
              colorScheme="purple"
              variant="ghost"
              size="lg"
              fontSize="18px"
              lineHeight="22px"
              fontFamily="Inter"
            >
              Lean More
            </Button>
          </Stack>
        </Box>
        <Box width="100%" justifySelf="end">
          <Image
            borderBottomLeftRadius="90px"
            src={HeroIMG}
            w="658px"
            objectFit="cover"
          />
        </Box>
      </Stack>
      <Center>
        <IconButton
          colorScheme="purple"
          variant="ghost"
          isRound
          icon={<IoIosArrowDown />}
        />
      </Center>

      <Stack p="5rem" spacing="2rem">
        <Heading size="xl" w="50%" color="primary.800">
          Peta Pariwisata Negara Republik Indonesia
        </Heading>

        {/* <Box h="400px" w="full" bg="gray.300" mb="1.3rem"></Box> */}
        <Pemetaan />

        <Stack justify="center" direction="row" mt="2rem">
          <Feature
            title="Populer di Indonesia"
            description="Tempat pariwisata yang populer dan pasti dikenal semua orang di Indonesia"
            icon={IoIosBookmark}
          />
          <Feature
            title="Favorit di Indonesia"
            description="Tempat favorit dan disukai semua orang Indonesia maupun para wisatawan"
            icon={IoIosRibbon}
          />
          <Feature
            title="Ramai di Indonesia"
            description="Spot yang paling ramai dikunjungi para wisatawan sekaligus warga Indonesia"
            icon={IoIosPeople}
          />
        </Stack>
      </Stack>

      <Section>
        <Stack justify="space-between" spacing="5rem" direction="row">
          <Kelebihan total="90+" title="Prestasi Daerah" />
          <Kelebihan total="100k+" title="Turis Pertahun" />
          <Kelebihan total="900+" title="Tempat Pariwisata" />
          <Kelebihan total="500k+" title="Wisatawan Puas" />
        </Stack>
      </Section>

      <Section>
        <Stack direction="row" justify="space-between">
          <Heading>Jelajahi Indoneisa lewat video dibawah</Heading>
          <Text>
            Video ini dibuat oleh pihak Pesona Indonesia dalam rangka
            memperingati hari pariwisata dunia 2020, Mari bersama jelajahi
            Indonesia dalam video singkat berikut!
          </Text>
        </Stack>

        <Box mt="2rem">
          <ReactPlayer
            url={PesonaIndoVideo}
            playing
            width="100%"
            height="40%"
          />
        </Box>
      </Section>

      <Section>
        <Stack direction="row" alignItems="center" spacing="5rem">
          <Image
            src={Bali}
            w="540px"
            h="540px"
            objectFit="cover"
            borderRadius="md"
            shadow="md"
          />
          <Stack spacing="1rem" align="start">
            <Heading>Keindahan alam yang diakui dunia</Heading>
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
        </Stack>
      </Section>

      <Section>
        <Stack direction="row" justify="space-between">
          <Heading>Tempat yang difiturkan</Heading>
          <Text>Lihat Semua </Text>
        </Stack>

        <Stack mt="2rem" spacing="1rem" justify="space-around" direction="row">
          <Galeri name="Bali" location="Indonesia" image={Bali} />
          <Galeri name="Raja Ampat" location="Indonesia" image={RajaAmpat} />
          <Galeri name="Yosemite" location="California" image={Yosemite} />
          <Galeri name="Air Terjun" location="Ciamis" image={AirTerjun} />
        </Stack>
      </Section>

      <Section mx="auto" w="60%">
        <Stack textAlign="center" mb="10px">
          <Heading mb="1px">
            Jelajahi Keberagaman dan Keseruan budaya indonesia
          </Heading>
          <Text>
            Telurusuri keindahan dan keberagaman berbagai budaya negara
            Indonesia bersama dengan kami anda bisa menikmati indahnya negara
            Indonesia
          </Text>
        </Stack>
        <Stack direction="row" justify="center">
          <Button colorScheme="purple">
            Ekporasi{' '}
            <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
          </Button>
          <Button colorScheme="purple">
            Rekomendasi{' '}
            <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
          </Button>
        </Stack>
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
