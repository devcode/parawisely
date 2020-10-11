import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Text, Button, Image, Stack } from '@chakra-ui/core';

import MobileDrawer from '../ui/MobileDrawer';
import Logo from '../../assets/logo/logo.png';

const MenuItems = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <RouterLink to={to}>
        <Link href={to}>{children}</Link>
      </RouterLink>
    </Text>
  );
};

const Header = props => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      shadow="md"
      py="1rem"
      px={['2rem', '2rem', '3rem', '5rem']}
      color="primary.800"
      backgroundColor="white"
      {...props}
    >
      <Flex align="center">
        <RouterLink to="/">
          <Image src={Logo} />
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
        <Button px="1.5rem" colorScheme="blue" variant="ghost">
          <span role="img" aria-label="ingris">
            🇬🇧
          </span>
        </Button>
        <Button px="1.5rem" colorScheme="blue">
          Rekomendasi
        </Button>
      </Stack>

      <Box display={['block', 'block', 'block', 'none']}>
        <MobileDrawer />
      </Box>
    </Flex>
  );
};

export default Header;
