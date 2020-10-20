import React, { useEffect } from 'react';
import sal from 'sal.js';
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  IconButton,
  SimpleGrid,
  Link,
} from '@chakra-ui/core';
import { IoIosArrowRoundForward } from 'react-icons/io';
import ReactPlayer from 'react-player';
import { RiMapPinAddFill, RiHeart3Fill, RiUserStarLine } from 'react-icons/ri';
import Mapbox from '../components/ui/map/Mapbox';
import { useQuery } from 'react-query';

import Section from '../components/sections/Section';
import Hero from '../components/sections/Hero';
import Sponsor from '../components/sections/Sponsor';
import LokasiCarousel from '../components/sections/LokasiCarousel';
import Layout from '../components/layouts';
import Spinner from '../components/ui/Spinner';

import alamImages from '../assets/images/alam-section-images.png';
import kulinerImages from '../assets/images/kuliner-section-images.png';
import budayaImages from '../assets/images/budaya-section-images.png';
import backgroundDots from '../assets/images/dot-bubble-bg.png';
import RajaAmpat from '../assets/images/raja-ampat.jpg';

import destinasiJson from '../data/destinasi.json';
import CardRekomendasi from '../components/ui/CardRekomendasi';

import { getDestinasiPilihan } from '../api/fetchData';

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
  useEffect(() => {
    sal();
  }, []);

  const { data, status, error } = useQuery(
    'destinasi-pilihan',
    getDestinasiPilihan
  );

  return (
    <Layout>
      <Hero />
      <Section>
        <Stack textAlign="center">
          <Text w="100%" fontWeight="extra_bold" color="blue.500">
            KEINDAHAN INDONESIA
          </Text>
          <Heading fontWeight="extra_bold">
            Keberagaman & Budaya Indonesia
          </Heading>
          <Text className="col-md-8 mx-auto">
            Nikmati berbagai macam budaya, keberagaman, kuliner dan keindahan
            alam yang membuat-mu jatuh cinta dan menjadikan Indonesia sebagai
            destinasi-mu selanjutnya
          </Text>
        </Stack>

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
              Beragam budaya bisa kalian temukan di Indonesia. Mulai dari Bahasa
              Daerah, Tari Tradisional, Senjata Traditional, Baju Daerah dan
              Lagu Daerah yang bisa kalian nikmati di Indonesia yang kaya akan
              budaya dan keberagamanya.
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
              sebagai negara terindah di dunia. Memiliki Pantai, Gunung, Tempat
              Bersejarah dan Wahana Atraksi yang ada di Indonesia yang siap
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
              hanya di Indonesia.
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
        <Box>
          <Stack textAlign="center">
            <Text w="100%" fontWeight="extra_bold" color="blue.500">
              VIDEO PARIWISATA INDONESIA
            </Text>
            <Heading fontWeight="extra_bold">
              Jelajahi Indonesia Lewat Video Ini
            </Heading>
            <Text className="col-md-8 mx-auto">
              Video dibawah dibuat oleh Pesona Indonesia dalam rangka merayakan
              hari Pariwisata dunia menampilkan keindahan alam dan keberagaman
              budaya yang dimiliki Indonesia!
            </Text>
          </Stack>
          <ReactPlayer
            style={{
              margin: '30px auto 0 auto',
            }}
            width="full"
            height="560px"
            url="https://www.youtube.com/watch?v=0kEnZN_WlgU"
          />
        </Box>
      </Section>

      <Section>
        <Stack textAlign="center">
          <Text w="100%" fontWeight="extra_bold" color="blue.500">
            FITUR PARAWISELY
          </Text>
          <Heading fontWeight="extra_bold">
            Apa yang membuat Parawisely Spesial?
          </Heading>
          <Text className="col-md-8 mx-auto">
            Parawisely membantu kamu agar mendapat pengalaman liburan di
            Indonesia dengan pengalaman menyenangkan dengan berbagai fitur yang
            kami tawarkan. Apa saja?
          </Text>
        </Stack>

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
              Virtual Tour yang membantu anda mengenal lebih dekat Indonesia
              secara online!
            </Heading>
            <Text fontSize="18px">
              Virtual Tour membantu anda mengenal dan melihat tempat secara
              bebas. Berbeda dengan photo biasa, dengan Virtual Tour anda bisa
              bebas mengelilingi dan menjelajahi tempat yang ingin kalian lihat.
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
              Peta Wisata membantumu menemukan tempat wisata di seluruh
              Indonesia!
            </Heading>
            <Text fontSize="18px">
              Peta Wisata membantu anda untuk menemukan berbagai macam tempat
              pariwisata di Indonesia dengan cepat dan akurat sekaligus membantu
              anda menemukan tempat yang cocok.
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
              Rekomendasi membantu kamu memilih tempat wisata di Indonesia!
            </Heading>
            <Text fontSize="18px">
              Bingung mau kemana? dan pusing memilih pilihan? Tenang, Parawisely
              menyediakan fitur rekomendasi untuk kamu agar dapat menemukan
              tempat pariwisata yang cocok denganmu.
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

      <Section>
        {status === 'loading' && <Spinner />}
        {status === 'error' && <div>{error}</div>}
        {status === 'success' && (
          <LokasiCarousel
            title="Destinasi Pilihan"
            link="/eksplorasi/pilihan"
            data={data.data}
          />
        )}
      </Section>

      <Stack p={['2rem', '2rem', '2rem', '5rem']} spacing="2rem">
        <Stack textAlign="center">
          <Text w="100%" fontWeight="extra_bold" color="blue.500">
            PETA PARIWISATA INDONESIA
          </Text>
          <Heading fontWeight="extra_bold">Peta Pariwisata Indonesia</Heading>
          <Text className="col-md-8 mx-auto">
            Berikut dibawah ini merupakan peta pariwisata Indonesia yang bisa
            anda jelajahi dan anda gunakan untuk menemukan tempat selanjutnya
            yang akan anda kunjungi.
          </Text>
        </Stack>

        <Mapbox width="auto" height="400px" />
        {/* <Box h="400px" w="full" bg="gray.300" mb="1.3rem"></Box> */}

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
        <Sponsor />
      </Section>
    </Layout>
  );
};

export default Landing;
