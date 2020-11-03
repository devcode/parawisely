import React from 'react';
import { Image, SimpleGrid, Box, Link } from '@chakra-ui/core';

const Popup = ({ feature }) => {
  const { id, name_place, image, address, slug } = feature.properties;

  return (
    <Box id={`popup-${id}`}>
      <SimpleGrid columns={1} spacing="1rem">
        <Image height="100px" width="100px" src={image} alt={name_place} />
        <Box>
          <h3>
            <b>{name_place}</b>
          </h3>
          <p>{address}</p>
          <Link href={`place/${slug}`}>selengkapnya</Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Popup;
