import React from 'react';
import { Box, Stack, Heading } from '@chakra-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import LokasiItem from '../ui/LokasiItem';

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

const LokasiCarousel = ({ title, link, data, slug, type_name }) => {
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
              <LokasiItem type_name={slug} data={location} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default LokasiCarousel;
