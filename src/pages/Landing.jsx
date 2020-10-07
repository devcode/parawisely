import {
  Button,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Center,
  IconButton,
  SimpleGrid,
  Avatar,
} from '@chakra-ui/core';
import React from 'react';
import Layout from '../components/layouts';
import {
  IoIosRibbon,
  IoIosArrowDown,
  IoIosBookmark,
  IoIosPeople,
} from 'react-icons/io';
import Map from '../components/ui/Map';

import HeroIMG from '../assets/images/hero.png';
import Bali from '../assets/images/bali.jpg';
import RajaAmpat from '../assets/images/raja-ampat.jpg';
import Yosemite from '../assets/images/yosemite.jpg';
import Pemetaan from '../components/ui/Pemetaan';

const Feature = ({ title, description, icon, ...rest }) => (
  <Stack direction="row">
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
  <Box p={5}>
    <Image
      borderRadius="md"
      maxH="200px"
      objectFit="cover"
      w="300px"
      src={image}
    />
    <Stack direction="row" spacing="1rem" py="1rem">
      <Avatar name={name} />
      <Box>
        <Heading as="h6" size="md">
          {name}
        </Heading>
        <Text>{location}</Text>
      </Box>
    </Stack>
  </Box>
);

const Landing = () => {
  return (
    <Layout>
      <Stack direction="row" align="center">
        <Box p={8}>
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

      <Stack px={8} py="3rem" spacing="1.3rem">
        <Heading size="xl" w="50%" color="primary.800">
          Peta Pariwisata Negara Republik Indonesia
        </Heading>

        {/* <Box h="400px" w="full" bg="gray.300" mb="1.3rem"></Box> */}
        <Pemetaan />

        <Stack direction="row">
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

      <Box py="3rem">
        <Stack align="center">
          <Text>GALERI</Text>
          <Heading mb="3rem">Tempat Pariwisata Favorit</Heading>

          <SimpleGrid columns={3} spacing={10}>
            <Galeri
              name="Raja Ampat"
              location="Raja Ampat, Indonesia"
              image={RajaAmpat}
            />
            <Galeri name="Bali" location="Bali, Indonesia" image={Bali} />
            <Galeri
              name="Yosemite"
              location="Yosemite, California"
              image={Yosemite}
            />
          </SimpleGrid>
        </Stack>
      </Box>

      <Stack mx="auto" py="3rem" w="60%">
        <Box textAlign="center">
          <Heading>Jelajahi Keberagaman dan Keseruan budaya indonesia</Heading>
          <Text>
            Telurusuri keindahan dan keberagaman berbagai budaya negara
            Indonesia bersama dengan kami anda bisa menikmati indahnya negara
            Indonesia
          </Text>
        </Box>
        <Stack direction="row" justify="center">
          <Button colorScheme="purple">Ekporasi</Button>
          <Button colorScheme="purple">Rekomendasi</Button>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Landing;
