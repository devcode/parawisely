import React from 'react';
import { Box, Divider, Icon, Link, Stack, Text } from '@chakra-ui/core';
import { FaInstagram, FaTwitter, FaFacebook, FaDribbble } from 'react-icons/fa';

const IconSosmed = ({ icon, url }) => <Icon as={icon} />;

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
          <Link>Beranda</Link>
          <Link>Eksplor</Link>
          <Link>Wisata Daerah</Link>
          <Link fontWeight="700" fontSize="34px">
            Parawisely
          </Link>
          <Link>Tentang</Link>
          <Link>Kontak</Link>
          <Link>Rekomendasi</Link>
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
