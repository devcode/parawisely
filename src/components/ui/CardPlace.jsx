import React from 'react';
import { Box, Image, Text, Stack, Heading } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import eksplorasiImages from '../../assets/images/eksplor.jpeg';

const CardPlace = ({ data }) => {
  return (
    <Box rounded="lg" shadow="md" overflow="hidden" height="400px">
      <Image
        src={eksplorasiImages}
        alt="Course Cover"
        h="200px"
        htmlHeight="200px"
      />
      <Stack align="baseline" p={5}>
        <Stack isInline align="baseline">
          <Text
            textTransform="uppercase"
            fontSize="12px"
            color="gray.500"
            letterSpacing="wide"
          >
            {data.type_id}
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
      </Stack>
    </Box>
  );
};

export default CardPlace;
