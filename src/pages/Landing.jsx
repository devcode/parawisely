import React from 'react';
import {
  Button,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  IconButton,
  SimpleGrid,
  Link,
  StackDivider,
} from '@chakra-ui/core';
import { IoIosArrowRoundForward } from 'react-icons/io';
import ReactPlayer from 'react-player';
import { RiMapPinAddFill, RiHeart3Fill, RiUserStarLine } from 'react-icons/ri';

import Section from '../components/sections/Section';
import Hero from '../components/sections/Hero';
import Sponsor from '../components/sections/Sponsor';
import LokasiCarousel from '../components/sections/LokasiCarousel';
import Layout from '../components/layouts';

import alamImages from '../assets/images/alam-section-images.png';
import kulinerImages from '../assets/images/kuliner-section-images.png';
import budayaImages from '../assets/images/budaya-section-images.png';
import backgroundDots from '../assets/images/dot-bubble-bg.png';
import RajaAmpat from '../assets/images/raja-ampat.jpg';

import destinasiJson from '../data/destinasi.json';
import CardRekomendasi from '../components/ui/CardRekomendasi';

const Feature = ({ title, description, icon }) => (
  <Stack spacing="1rem" direction="row">
    <IconButton colorScheme="blue" icon={icon} isRound size="md" />
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
      <Box bg="blue.500" color="white" p="5rem" textAlign="center">
        <Heading>Statik Sektor Parawisata</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga totam
          quae veniam quod delectus quis commodi ullam itaque asperiores. Nam.
        </Text>

        <Stack
          divider={<StackDivider borderColor="gray.400" />}
          direction="row"
          spacing="1rem"
          justify="center"
          mt="2rem"
        >
          <Stack>
            <Heading>5</Heading>
            <Text>Lorem ipsum dolor</Text>
          </Stack>
          <Stack>
            <Heading>5</Heading>
            <Text>Lorem ipsum dolor</Text>
          </Stack>
          <Stack>
            <Heading>5</Heading>
            <Text>Lorem ipsum dolor</Text>
          </Stack>
          <Stack>
            <Heading>5</Heading>
            <Text>Lorem ipsum dolor</Text>
          </Stack>
        </Stack>
      </Box>

      <Section>
        <Box>
          <Heading>Jelajahi Indonesia melewati video dibawah ini</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            autem?
          </Text>
        </Box>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="80%"
            height="70%"
          />
        </div>
      </Section>

      <Section>
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          alignItems="center"
          spacing={['1rem', '1rem', '1rem', '5rem']}
        >
          <Image src={budayaImages} w="640px" objectFit="cover" />
          <Stack spacing="1rem" align="start">
            <Heading
              fontWeight="extra_bold"
              fontSize={['30px', '30px', '30px', '40px']}
            >
              Keberagaman budaya yang bisa anda nikmati hanya di Indonesia!
            </Heading>
            <Text fontSize="18px">
              Beragam budaya bisa kalian temuka di Indonesia. Mulai dari Bahasa
              Daerah, Tari Tradisional, Senjata Traditional, Baju Daerah dan
              Lagu Daerah yang bisa kalian nikmati di Indonesia yang kaya akan
              budaya dan keberagaman-nya.
            </Text>
            <Text
              color="#4737ff"
              fontWeight="extra_bold"
              colorScheme="blue"
              variant="ghost"
            >
              <Link href="/">
                {' '}
                Selengkapnya
                <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
              </Link>
            </Text>
          </Stack>
        </SimpleGrid>
      </Section>

      <Section mt="-200px">
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          alignItems="center"
          spacing={['1rem', '1rem', '1rem', '5rem']}
        >
          <Stack spacing="1rem" align="start">
            <Heading
              fontWeight="extra_bold"
              fontSize={['30px', '30px', '30px', '40px']}
            >
              Keindahan alam yang di akui Dunia yang bisa kamu liat di
              Indonesia!
            </Heading>
            <Text fontSize="18px">
              Keindahan alam yang dimiliki Indonesia membuatnya diakui dunia
              sebagai negara terindah di dunia. Memiliki pantai, gunung, tempat
              bersejarah dan wahana atraksi yang ada di Indonesia yang siap
              kalian kunjungi kapan saja.
            </Text>

            <Text
              color="#4737ff"
              fontWeight="extra_bold"
              colorScheme="blue"
              variant="ghost"
            >
              <Link href="/">
                {' '}
                Selengkapnya
                <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
              </Link>
            </Text>
          </Stack>
          <Image src={alamImages} w="640px" objectFit="cover" />
        </SimpleGrid>
      </Section>

      <Section mt="-200px">
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          alignItems="center"
          spacing={['1rem', '1rem', '1rem', '5rem']}
        >
          <Image src={kulinerImages} w="640px" objectFit="cover" />
          <Stack spacing="1rem" align="start">
            <Heading
              fontWeight="extra_bold"
              fontSize={['30px', '30px', '30px', '40px']}
            >
              Kelezatan kuliner Indonesia yang memanjakan lidah-mu dan lezat!
            </Heading>
            <Text fontSize="18px">
              Indonesia memiliki banyak ragam kuliner yang bisa kalian coba
              mulai dari minuman, makanan ataupun makanan khas tiap daerah yang
              siap mewarnai liburan mu di Indonesia dengan kelezatan yang nikmat
              hanya di Indonesia
            </Text>
            <Text
              color="#4737ff"
              fontWeight="extra_bold"
              colorScheme="blue"
              variant="ghost"
            >
              <Link href="/">
                {' '}
                Selengkapnya
                <Icon
                  as={IoIosArrowRoundForward}
                  boxSize="2rem"
                  ml="4px"
                />{' '}
              </Link>
            </Text>
          </Stack>
        </SimpleGrid>
      </Section>

      <Section>
        <LokasiCarousel
          title="Destinasi Pilihan"
          link="/eksplor/pilihan"
          data={destinasiJson}
        />
      </Section>

      <Section
        background={`url(${backgroundDots})`}
        backgroundPosition="center center"
        backgroundSize="cover"
        mt="-100px"
        mx="auto"
        w={['full', 'full', 'full', '80%']}
      >
        <Stack
          pt="15px"
          pb="50px"
          textAlign="center"
          spacing="0.7rem"
          mb="10px"
        >
          <Heading
            fontWeight="extra_bold"
            lineHeight="54px"
            letterSpacing="-2.4px"
            fontSize={['24px', '24px', '24px', '50px']}
          >
            Jelajahi keberagaman dan <br></br> keseruan budaya Indonesia
          </Heading>
          <Text fontSize={['14px', '14px', '14px', '18px']}>
            Telurusuri keindahan dan keberagaman berbagai budaya negara
            Indonesia <br></br> bersama dengan kami anda bisa menikmati indahnya
            negara Indonesia
          </Text>
        </Stack>
        <SimpleGrid
          mx="auto"
          w={['full', 'full', 'full', '50%']}
          spacing={['0.5rem', '0.5rem', '0.5rem', '1rem']}
          columns={[1, 1, 1, 2]}
          mt="-40px"
        >
          <Button fontSize="16px" fontWeight="extra_bold" colorScheme="blue">
            Ekplorasi
          </Button>
          <Button fontSize="16px" fontWeight="extra_bold" colorScheme="blue">
            Rekomendasi
          </Button>
        </SimpleGrid>
      </Section>

      <Stack p={['2rem', '2rem', '2rem', '5rem']} spacing="2rem">
        <Heading
          sizes={['sm', 'sm', 'sm', 'xl']}
          w={['full', 'full', 'full', '60%']}
          fontWeight="extra_bold"
          fontSize="45px"
          letterSpacing="-1px"
          lineHeight="62px"
        >
          Peta Pariwisata <br /> Negara Republik Indonesia
        </Heading>

        <Box h="400px" w="full" bg="gray.300" mb="1.3rem"></Box>

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

      <CardRekomendasi image={RajaAmpat} isRadius>
        <Heading>Bergabung bersama komunitas wisatawan</Heading>
        <Button mt="1rem" background="white" color="blue.800">
          Gabung <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
        </Button>
      </CardRekomendasi>

      <Section>
        <Sponsor />
      </Section>
    </Layout>
  );
};

export default Landing;
