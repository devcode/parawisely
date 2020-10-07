import React from 'react';
import {
  Box,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/core';
import { FaInstagram, FaTwitter, FaFacebook, FaDribbble } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

import Logo from '../../assets/logo/logo-178.png';

const IconSosmed = ({ icon, url }) => <Icon as={icon} />;

const LinkItem = ({ to, isCenter, children, ...rest }) => (
  <RouterLink to={to}>
    <Link
      href={to}
      fontSize={isCenter ? '34px' : 'normal'}
      fontWeight={isCenter ? '700' : '400'}
      {...rest}
    >
      {children}
    </Link>
  </RouterLink>
);

const Footer = () => {
  return (
    <>
      <Box w="80%" mx="auto" py="3rem">
        <Image src={Logo} mx="auto" />
        <Stack
          py="3rem"
          direction="row"
          justify="center"
          spacing="3rem"
          align="center"
        >
          <LinkItem to="/">Beranda</LinkItem>
          <LinkItem to="/eksplor">Eksplor</LinkItem>
          <LinkItem to="/wisata-daerah">Wisata Daerah</LinkItem>
          <LinkItem to="/tentang">Tentang</LinkItem>
          <LinkItem to="/kontak">Kontak</LinkItem>
          <LinkItem to="/rekomendasi">Rekomendasi</LinkItem>
        </Stack>

        <Divider />

        <Stack align="center" py="2rem" direction="row" justify="space-between">
          <Text>© 2020 Parawisely. All rights reserved</Text>
          <Stack spacing="1rem" direction="row" justify="center">
            <IconSosmed icon={FaInstagram} />
            <IconSosmed icon={FaTwitter} />
            <IconSosmed icon={FaFacebook} />
            <IconSosmed icon={FaDribbble} />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
