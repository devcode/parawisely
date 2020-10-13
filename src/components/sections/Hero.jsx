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
import SwiperCore, { Navigation,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Bali from '../../assets/images/bali.jpg';
SwiperCore.use([Navigation, Autoplay]);

const Hero = props => {
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
            fontWeight="extra_bold"
            lineHeight="48px"
          >
            Jelajahi Indahnya Indonesia Bersama Kami
          </Heading>
          <Text
            w={['100%', '100%', '100%', '80%']}
            color="#666666"
            fontSize="17px"
            letterSpacing="0px"
            lineHeight="31px"
          >
           Jelajahi keindahan alam dan keberagaman budaya yang dimiliki Indonesia dengan berkunjung di Indonesia akan kami pastikan anda mendapat pengalaman berharga!
          </Text>
          <Button px="3rem" size="lg" lineHeight="32px" letterSpacing="0.3px" fontWeight="extra_bold" fontSize="15px" colorScheme="blue">
            Mulai sekarang ➜
          </Button>
        </Stack>
        <Box d={['none', 'none', 'none', 'block']} minW="lg">
          <Swiper slidesPerView={2.3} grabCursor loop={true} autoplay={{
                    delay: 1300,
                    disableOnInteraction: false
                }}>
            
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

export default Hero;
