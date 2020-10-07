import React, { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/core';
import { FaBars, FaTimes } from 'react-icons/fa';

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
      <Box bottom={0} d={{ md: 'none' }} p={5} pos="fixed" right={0} zIndex={1}>
        <IconButton
          aria-label="Open Menu"
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
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
                    Parawisely
                  </Link>
                </RouterLink>
              </DrawerHeader>

              <DrawerBody
                as={Stack}
                fontSize="lg"
                justify="center"
                p={8}
                spacing={4}
              >
                <MenuItems to="/">Beranda</MenuItems>
                <MenuItems to="/eksplor">Eksplor </MenuItems>
                <MenuItems to="/wisata-daerah">Wisata Daerah </MenuItems>
                <MenuItems to="/tentang">Tetang</MenuItems>
                <MenuItems to="/kontak">Kontak</MenuItems>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </>
  );
};

export default MobileDrawer;
