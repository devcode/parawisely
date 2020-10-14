import React from 'react';
import { Box, Image, Stack, Heading, Text } from '@chakra-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/swiper-bundle.css';

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

const LokasiItem = ({ image, name, location }) => (
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

const LokasiCarousel = ({ title, link, data }) => {
  return (
    <Box>
      <Stack
        direction="row"
        justify={['center', 'center', 'center', 'space-between']}
      >
        <Heading>{title}</Heading>
        <Link to={link}>Lihat Semua</Link>
      </Stack>

      <Box mt="2rem">
        <Swiper breakpoints={breakpoints}>
          {data.map(location => (
            <SwiperSlide key={location.id}>
              <LokasiItem
                image={location.image}
                location={location.location}
                name={location.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default LokasiCarousel;
