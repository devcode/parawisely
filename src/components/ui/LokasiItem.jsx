import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import notFoundIMG from '../../assets/ilustration/image-notfound.jpg';

const LokasiItem = ({ data, type_name }) => {
  const { image, name_place, provinsi, slug } = data;
  return (
    <Box>
      <Image
        src={image}
        fallbackSrc={notFoundIMG}
        h="361px"
        w="261px"
        objectFit="cover"
        borderRadius="md"
        shadow="lg"
      />
      <Box
        position="relative"
        w="80%"
        p="1rem"
        top={-86}
        borderTopRightRadius="lg"
        style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <Link to={`eksplorasi/${type_name}/${slug}`}>
          <Heading fontWeight="extra_bold" size="md">
            {name_place}
          </Heading>
          <Text color="gray.600">{provinsi}</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default LokasiItem;
