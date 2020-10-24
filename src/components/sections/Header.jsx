import React, { useEffect } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
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
      <RouterLink activeStyle={{ color: 'blue' }} exact to={to}>
        {children}
      </RouterLink>
    </Text>
  );
};

const Header = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack
      top="0"
      position="sticky"
      zIndex={99}
      as="nav"
      direction="row"
      justify="space-between"
      align="center"
      wrap="wrap"
      shadow="
      0 0.8px 8.7px rgba(0, 0, 0, 0.004),
      0 1.8px 19.5px rgba(0, 0, 0, 0.007),
      0 3.1px 33.3px rgba(0, 0, 0, 0.008),
      0 4.7px 51.3px rgba(0, 0, 0, 0.009),
      0 7px 76px rgba(0, 0, 0, 0.011),
      0 10.3px 111.7px rgba(0, 0, 0, 0.012),
      0 15.4px 167.4px rgba(0, 0, 0, 0.013),
      0 24.5px 266.8px rgba(0, 0, 0, 0.016),
      0 46px 500px rgba(0, 0, 0, 0.02)
    ;
"
      py="1rem"
      px={['2rem', '2rem', '3rem', '5rem']}
      color="primary.800"
      backgroundColor="white"
    >
      <Box>
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'start', 'start']}
          direction={['column', 'row', 'row', 'row']}
          fontWeight="regular"
        >
          <RouterLink to="/">
            <Image mr={['0', '0', '0', '2rem']} src={Logo} htmlWidth="24px" />
          </RouterLink>
          <Box d={['none', 'none', 'none', 'flex']}>
            <MenuItems to="/">Beranda</MenuItems>
            <MenuItems to="/eksplorasi">Eksplorasi</MenuItems>
            <MenuItems to="/wisata-daerah">Wisata Daerah</MenuItems>
            <MenuItems to="/peta-wisata">Peta Wisata</MenuItems>
            <MenuItems to="/virtual-tour">Virtual Tour</MenuItems>
            <MenuItems to="/tentang">Tentang</MenuItems>
            <MenuItems to="/kontak">Kontak</MenuItems>
          </Box>
        </Flex>
      </Box>

      <Stack
        display={['none', 'none', 'none', 'block']}
        direction="row"
        spacing="1rem"
      >
        <RouterLink to="/rekomendasi">
          <Button px="2rem" colorScheme="blue">
            <Text fontWeight="bold">Rekomendasi</Text>
          </Button>
        </RouterLink>
      </Stack>

      <Box display={['block', 'block', 'block', 'none']}>
        <MobileDrawer />
      </Box>
    </Stack>
  );
};

export default Header;
