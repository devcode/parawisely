import React from 'react';
import { Box, Divider, Icon, Link, Stack, Text } from '@chakra-ui/core';
import { FaInstagram, FaTwitter, FaFacebook, FaDribbble } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

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
          <LinkItem to="/" isCenter>
            Parawisely
          </LinkItem>
          <LinkItem to="/tentang">Tentang</LinkItem>
          <LinkItem to="/kontak">Kontak</LinkItem>
          <LinkItem to="/rekomendasi">Rekomendasi</LinkItem>
        </Stack>
        <Divider />

        <Box align="center" py="2rem">
          <Text mb="0.5rem" letterSpacing="0.1rem">
            JOIN US
          </Text>
          <Stack spacing="1rem" direction="row" justify="center">
            <IconSosmed icon={FaInstagram} />
            <IconSosmed icon={FaTwitter} />
            <IconSosmed icon={FaFacebook} />
            <IconSosmed icon={FaDribbble} />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
