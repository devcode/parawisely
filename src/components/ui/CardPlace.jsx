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
  Heading,
} from '@chakra-ui/core';

import eksplorasiImages from '../../assets/images/eksplor.jpeg';

const CardPlace = ({ data }) => {
  return (
    <Box rounded="lg" shadow="md" overflow="hidden">
      <Image src={eksplorasiImages} alt="Course Cover" />
      <Box p={5}>
        <Stack isInline align="baseline">
          <Text
            textTransform="uppercase"
            fontSize="12px"
            color="gray.500"
            letterSpacing="wide"
          >
            {data.kabupaten.toUpperCase()} &bull; {data.provinsi.toUpperCase()}
          </Text>
        </Stack>
        <Heading fontWeight="bold" fontSize="18px" my={2}>
          {data.name_place}
        </Heading>
        <Stack isInline justify="space-between">
          <Box d="flex">
            <Text as="h5" fontSize="14px" fontWeight="semibold">
              {data.comments ? data.comments.length : 0}, Ulasan
            </Text>
          </Box>
        </Stack>
        <Button
          mt="1rem"
          fontSize="16px"
          colorScheme="blue"
          variant="ghost"
          boxShadow="sm"
          isFullWidth
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          Selengkapnya
        </Button>
      </Box>
    </Box>
  );
};

export default CardPlace;
