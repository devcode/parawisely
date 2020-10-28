import React from 'react';
import { Image, Box, Heading, SimpleGrid, Text } from '@chakra-ui/core';
import bg from '../../../assets/images/candi-borobudur.jpeg';
import { Link } from 'react-router-dom';

const CityInfo = ({ info }) => {
  const displayName = `${info.name_place}`;

  return (
    <Box w="300px" borderRadius="md" p="4px">
      <Heading fontSize="18px">{displayName}</Heading>
      <SimpleGrid mt="5px" spacing="10px" columns={1}>
        <Image borderRadius="md" src={bg} />
        <Box isTruncated>
          <Text fontSize="14px">{info.description}</Text>
        </Box>
        <Link to={`/place/${info.slug}`}>
          <Text fontSize="14px" color="blue.500">
            Selengkapnya
          </Text>
        </Link>
      </SimpleGrid>
    </Box>
  );
};

export default CityInfo;
