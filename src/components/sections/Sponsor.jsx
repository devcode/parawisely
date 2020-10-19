import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Image, Divider } from '@chakra-ui/core';

import sponsorJson from '../../data/sponsor.json';

const breakpoints = {
  320: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

const Sponsor = () => {
  return (
    <Box>
      <Box my="2rem">
        <Swiper breakpoints={breakpoints} loop>
          {sponsorJson.map(sponsor => (
            <SwiperSlide key={sponsor.id}>
              <Image src={sponsor.images} objectFit="contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      
    </Box>
  );
};

export default Sponsor;
