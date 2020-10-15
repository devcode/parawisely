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
        />

        <Drawer
          finalFocusRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader p={[8, 8, 4, 4]}>
                <RouterLink to="/">
                  <Link href="/" onClick={onClose} variant="link">
                    <Image src={Logo} htmlWidth="30px" />
                  </Link>
                </RouterLink>
              </DrawerHeader>

              <DrawerBody
                as={Stack}
                fontSize="lg"
                justify="top"
                p={8}
                spacing={4}
              >
                <MenuItems to="/wisata-daerah">Wisata Daerah </MenuItems>
                <MenuItems to="/eksplor">Eksplorasi </MenuItems>
                <MenuItems to="/tentang">Tentang</MenuItems>
                <MenuItems to="/kontak">Kontak</MenuItems>
                <MenuItems to="/rekomendasi">Rekomendasi</MenuItems>
                <MenuItems to="/map">Peta Wisata</MenuItems>
                <MenuItems to="/mitra">Mitra Pariwisata</MenuItems>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Stack direction="row" align="left" spacing="1.5rem">
                  <IconSosmed url="https://facebook.com" icon={FaFacebook} />
                  <IconSosmed url="https://twitter.com" icon={FaTwitter} />
                  <IconSosmed url="https://instagram.com" icon={FaInstagram} />
                  <IconSosmed url="https://youtube.com" icon={FaYoutube} />
                </Stack>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </>
  );
};

export default MobileDrawer;
