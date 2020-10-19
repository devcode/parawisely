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
          <Image src={Logo} />
          <Text fontSize="14px">
            Parawisely adalah project website yang dibuat untuk lomba IT Expo
            yang diselenggarakan UNJ. Kami dari team SERVER-RPL mempersembahkan
            website ini sebagai hasil karya orisinal.
          </Text>
          <Stack direction="row" spacing="1rem">
            <IconSosmed url="https://facebook.com" icon={FaFacebook} />
            <IconSosmed url="https://twitter.com" icon={FaTwitter} />
            <IconSosmed url="https://instagram.com" icon={FaInstagram} />
            <IconSosmed url="https://youtube.com" icon={FaYoutube} />
          </Stack>
        </Stack>
        <Stack justify="space-between">
          <Heading fontSize="lg">Kategori</Heading>
          <LinkItem to="kategory/pantai">Pantai</LinkItem>
          <LinkItem to="kategory/gunung">Gunung</LinkItem>
          <LinkItem to="kategory/sejarah">Bersejarah</LinkItem>
          <LinkItem to="kategory/kuliner">Kuliner</LinkItem>
          <LinkItem to="kategory/wahana">Wahana</LinkItem>
        </Stack>
        <Stack justify="space-between">
          <Heading fontSize="lg">Menu</Heading>
          <LinkItem to="/">Beranda</LinkItem>
          <LinkItem to="eksplor">Eksplorasi</LinkItem>
          <LinkItem to="wisata-daerah">Wisata Daerah</LinkItem>
          <LinkItem to="tentang">Tentang</LinkItem>
          <LinkItem to="kontak">Kontak</LinkItem>
        </Stack>
        <Stack spacing="1rem">
          <Heading fontSize="lg">Hubungi Kami</Heading>
          <LinkItem to="mailto:app@parawisely.com">
            <Icon color="blue.500" as={FiMail} mr="0.5rem" fontSize="lg" />
            app@parawisely.com
          </LinkItem>
          <LinkItem to="callto:+62891203910">
            <Icon color="blue.500" as={FiPhone} mr="0.5rem" fontSize="lg" />
            +62891203910
          </LinkItem>
          <LinkItem to="https://smknciamis.id">
            <Icon color="blue.500" as={FiMapPin} mr="0.5rem" fontSize="lg" />
            SMKN 1 CIAMIS
          </LinkItem>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
