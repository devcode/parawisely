import React from 'react';
import {
  Box,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/core';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

import { Link as RouterLink } from 'react-router-dom';

import Logo from '../../assets/logo/logo.png';

const IconSosmed = ({ icon, url }) => (
  <Link href={url} isExternal>
    <Icon color="blue.500" as={icon} fontSize="lg" />
  </Link>
);

const LinkItem = ({ to, children, ...rest }) => (
  <RouterLink to={to}>{children}</RouterLink>
);

const Footer = () => {
  return (
    <Box p={['2rem', '2rem', '3rem', '5rem']}>
      <SimpleGrid columns={[1, 1, 1, 4]} spacing="3rem">
        <Stack spacing="1rem" align="start">
          <RouterLink to="/">
            {' '}
            <Image src={Logo} />
          </RouterLink>
          <Text textAlign="justify" fontSize="16px">
            Parawisely adalah project website yang dibuat untuk lomba IT Expo
            yang diselenggarakan UNJ. Kami dari team SERVER-RPL mempersembahkan
            website ini sebagai hasil karya orisinal.
          </Text>
          <Stack direction="row" spacing="1rem">
            <IconSosmed
              url="https://www.facebook.com/pages/Smkn%201%20Ciamis/856236581136537/"
              icon={FaFacebook}
            />
            <IconSosmed url="https://twitter.com/smkn1cms" icon={FaTwitter} />
            <IconSosmed
              url="https://www.instagram.com/smkn1ciamis_/"
              icon={FaInstagram}
            />
            <IconSosmed
              url="https://www.youtube.com/channel/UC8AFooRNkRnNuoPPDJ9PhjA"
              icon={FaYoutube}
            />
          </Stack>
        </Stack>
        <Stack justify="space-between">
          <Heading fontSize="lg">Kategori Pariwisata</Heading>
          <LinkItem to="eksplorasi/pantai">Pantai</LinkItem>
          <LinkItem to="eksplorasi/pegunungan">Pegunungan</LinkItem>
          <LinkItem to="eksplorasi/museum">Museum</LinkItem>
          <LinkItem to="eksplorasi/kuliner">Kuliner</LinkItem>
          <LinkItem to="eksplorasi/wahana-atraksi">Wahana Atraksi</LinkItem>
        </Stack>
        <Stack justify="space-between">
          <Heading fontSize="lg">Menu Parawisely</Heading>
          <LinkItem to="/">Beranda</LinkItem>
          <LinkItem to="eksplorasi">Eksplorasi</LinkItem>
          <LinkItem to="wisata-daerah">Wisata Daerah</LinkItem>
          <Link href="http://parawisely.herokuapp.com/registrasi" isExternal>
            Mitra Pariwisata
          </Link>
          <LinkItem to="kontak">Kontak</LinkItem>
        </Stack>
        <Stack spacing="1rem">
          <Heading fontSize="lg">Hubungi Kami</Heading>
          <LinkItem to="mailto:app@parawisely.com">
            <Icon color="blue.500" as={FiMail} mr="1rem" fontSize="lg" />
            apps.parawisely@gmail.com
          </LinkItem>
          <LinkItem to="callto:(0265)771204">
            <Icon color="blue.500" as={FiPhone} mr="1rem" fontSize="lg" />
            (0265) 771204
          </LinkItem>
          <Link>
            <Text textAlign="justify">
              <Icon color="blue.500" as={FiMapPin} mr="1rem" fontSize="lg" />
              Jl. Jenderal Sudirman No. 269 RT 13/RW 09, Desa Sindangrasa,
              Sindangrasa, Kec. Ciamis, Kabupaten Ciamis, Jawa Barat 46215
            </Text>
          </Link>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
