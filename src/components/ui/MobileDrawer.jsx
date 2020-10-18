import React, { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  Image,
  Stack,
  useDisclosure,
} from '@chakra-ui/core';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo/logo.png';
const IconSosmed = ({ icon, url }) => (
  <Link href={url} isExternal>
    <Icon color="blue.500" as={icon} fontSize="lg" />
  </Link>
);
const MobileDrawer = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = useRef();

  const MenuItems = ({ children, to = '/' }) => {
    return (
      <RouterLink to={to}>
        <Link href={to} onClick={onClose}>
          {children}
        </Link>
      </RouterLink>
    );
  };

  return (
    <>
      <Box>
        <IconButton
          aria-label="Open Menu"
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          onClick={onToggle}
          ref={btnRef}
          size="lg"
          color="blue.500"
          variant="ghost"
          bgColor="gray.50"
        />

        <Drawer
          finalFocusRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
        >
          <DrawerOverlay>
            <DrawerContent  bgColor="blue.500" color="white">
              <DrawerBody
                as={Stack}
                fontSize="lg"
                justify="center"
                p={8}
                spacing={4}
              >
                <MenuItems to="/">Beranda</MenuItems>
                <MenuItems to="/wisata-daerah">Wisata Daerah</MenuItems>
                <MenuItems to="/eksplorasi">Eksplorasi</MenuItems>
                <MenuItems to="/peta-wisata">Peta Wisata</MenuItems>
                <MenuItems to="/mitra-pariwisata">Mitra Pariwisata</MenuItems>
                 <MenuItems to="/tentang">Tentang</MenuItems>
                <MenuItems to="/kontak">Kontak</MenuItems>
                <MenuItems to="/rekomendasi">Rekomendasi</MenuItems>
              </DrawerBody>

              
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </>
  );
};

export default MobileDrawer;
