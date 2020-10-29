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
import { Link } from 'react-router-dom';

import eksplorasiImages from '../../assets/images/eksplor.jpeg';

const CardPlace = ({ data }) => {
  console.log(data);
  return (
    <Box rounded="lg" shadow="md" overflow="hidden">
      <Image
        src={eksplorasiImages}
        alt="Course Cover"
        h="200px"
        htmlHeight="200px"
      />
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
        <Link to={`/place/${data.slug}`}>
          <Text fontSize="16px" mt="5px">
            Selengkapnya
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default CardPlace;
