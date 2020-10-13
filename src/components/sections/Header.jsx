import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Text, Button, Image, Stack } from '@chakra-ui/core';

import MobileDrawer from '../ui/MobileDrawer';
import Logo from '../../assets/logo/logo.png';
import '../../stylesheets/html.css';

const MenuItems = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <RouterLink to={to}>{children}</RouterLink>
    </Text>
  );
};

const Header = props => {
  return (
    <Flex
      zIndex={1}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      shadow="md"
      py="1rem"
      px={['2rem', '2rem', '3rem', '5rem']}
      color="primary.800"
      backgroundColor="white"
    >
      <Flex align="center">
        <RouterLink to="/">
          <Image src={Logo} htmlWidth="30px" />
        </RouterLink>
      </Flex>

      <Box
        display={['none', 'none', 'none', 'block']}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'start', 'start']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
          fontWeight="normal"
        >
          <MenuItems to="/">Beranda</MenuItems>
          <MenuItems to="/eksplor">Eksplor </MenuItems>
          <MenuItems to="/wisata-daerah">Wisata Daerah </MenuItems>
          <MenuItems to="/tentang">Tentang</MenuItems>
          <MenuItems to="/kontak">Kontak</MenuItems>
        </Flex>
      </Box>

      <Stack
        display={['none', 'none', 'none', 'block']}
        direction="row"
        spacing="1rem"
      >
        <Button px="1.5rem" colorScheme="blue">
        <Text
            fontWeight="extra_bold"
          >
          Rekomendasi
          </Text>
        </Button>
      </Stack>

      <Box display={['block', 'block', 'block', 'none']}>
        <MobileDrawer />
      </Box>
    </Flex>
  );
};

export default Header;
