import React from 'react';
import {
  Button,
  SimpleGrid,
  Text,
  Heading,
  Box,
  Image,
  Stack,
} from '@chakra-ui/core';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Bali from '../../assets/images/bali.jpg';

SwiperCore.use([Navigation]);

export const Hero = () => {
  return (
    <Box
      p={['5rem 2rem', '5rem 2rem', '5rem 2rem', '5rem 0 5rem 5rem']}
      h={['80vh', '80vh', '80vh', 'auto']}
    >
      <SimpleGrid alignItems="center" columns={[1, 1, 1, 2]}>
        <Stack spacing={5} align="start">
          <Text
            color="gray.400"
            letterSpacing="1.8px"
            lineHeight="20px"
            fontWeight="bold"
            fontSize="13px"
          >
            PARAWISELY
          </Text>
          <Heading
            w={['100%', '100%', '100%', '70%']}
            fontSize="36px"
            letterSpacing="-1px"
          >
            Jelajahi Indahnya Indonesia Bersama Kami
          </Heading>
          <Text
            w={['100%', '100%', '100%', '80%']}
            color="gray.700"
            fontSize="17px"
          >
            Jelajahi keindahan alam dan keberagaman budaya yang dimiliki
            Indonesia dengan berkunjung di Indonesia akan kami pastikan anda
            mendapat pengalaman berharga!
          </Text>
          <Button px="3rem" size="lg" fontSize="15px" colorScheme="blue">
            Mulai Sekarang
          </Button>
        </Stack>
        <Box d={['none', 'none', 'none', 'block']} minW="lg">
          <Swiper slidesPerView={2} grabCursor>
            <SwiperSlide>
              <Image borderRadius="md" src={Bali} w="262px" h="410px" />
            </SwiperSlide>
            <SwiperSlide>
              <Image borderRadius="md" src={Bali} w="262px" h="410px" />
            </SwiperSlide>
            <SwiperSlide>
              <Image borderRadius="md" src={Bali} w="262px" h="410px" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
