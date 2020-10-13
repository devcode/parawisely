import React from 'react';
import { Box, Stack, Heading, Text, Image } from '@chakra-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';

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

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const Destinasi = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justify={['center', 'center', 'center', 'space-between']}
      >
        <Heading>Destinasi Pilihan</Heading>
        <Text>Lihat Semua</Text>
      </Stack>

      <Box mt="2rem">
        <Swiper slidesPerView={4} breakpoints={breakpoints}>
          {destinasiJson.map(destinasi => (
            <SwiperSlide key={destinasi.id}>
              <DestinasiItem
                key={destinasi.id}
                image={destinasi.image}
                location={destinasi.location}
                name={destinasi.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Destinasi;
