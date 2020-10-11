import React from 'react';
import { Box, Stack, Heading, Text, Image } from '@chakra-ui/core';

import destinasiJson from '../../data/all-destinasi.json';

const DestinasiItem = ({ image, name, location }) => (
  <Box>
    <Image
      src={image}
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
      <Heading size="md">{name}</Heading>
      <Text color="gray.600">{location}</Text>
    </Box>
  </Box>
);

const Destinasi = () => {
  return (
    <Box>
      <Stack direction="row" justify="space-between">
        <Heading>Destinasi Pilihan</Heading>
        <Text>Lihat Semua</Text>
      </Stack>

      <Stack mt="2rem" spacing="1rem" justify="space-around" direction="row">
        {destinasiJson.map(destinasi => (
          <DestinasiItem
            key={destinasi.id}
            image={destinasi.image}
            location={destinasi.location}
            name={destinasi.name}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Destinasi;
