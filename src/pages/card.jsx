import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Icon,
  Button,
  useColorMode,
} from '@chakra-ui/core';

import eksplorasiImages from '../assets/images/eksplorasi-images.png';

const Card = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.700' };
  const textColor = { light: 'gray.500', dark: 'gray.100' };

  return (
    <Box
      w="300px"
      rounded="20px"
      overflow="hidden"
      boxShadow="
      0 2px 3.7px rgba(0, 0, 0, 0.005),
      0 4.5px 8.3px rgba(0, 0, 0, 0.007),
      0 7.9px 14.5px rgba(0, 0, 0, 0.009),
      0 12.5px 23px rgba(0, 0, 0, 0.01),
      0 19.3px 35.5px rgba(0, 0, 0, 0.011),
      0 30.1px 55.5px rgba(0, 0, 0, 0.013),
      0 50px 92.1px rgba(0, 0, 0, 0.015),
      0 100px 184px rgba(0, 0, 0, 0.02)
    ;
    
    "
      bg={bgColor[colorMode]}
      className="mx-auto mt-5"
    >
      <Image src={eksplorasiImages} alt="Course Cover" />
      <Box p={5}>
        <Stack isInline align="baseline">
          <Text
            textTransform="uppercase"
            fontSize="sm"
            color="gray.500"
            letterSpacing="wide"
          >
            PULAU JAWA &bull; DKI JAKARTA
          </Text>
        </Stack>
        <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
          Taman Mini Indonesia Indah
        </Text>
        <Stack isInline justify="space-between" color={textColor[colorMode]}>
          <Box d="flex">
            <Text as="h5" fontSize="sm" fontWeight="semibold">
              34 Reviews
            </Text>
          </Box>
        </Stack>
        <Box textAlign="center">
          <Button
            variantColor="teal"
            size="lg"
            mt={3}
            boxShadow="sm"
            isFullWidth
            _hover={{ boxShadow: 'md' }}
            _active={{ boxShadow: 'lg' }}
          >
            Selengkapnya
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
