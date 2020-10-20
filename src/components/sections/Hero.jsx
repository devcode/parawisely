import React from 'react';
import heroImages from '../../assets/images/hero-section-images.png';
import {
  Button,
  SimpleGrid,
  Text,
  Heading,
  Box,
  Image,
  Stack,
} from '@chakra-ui/core';

const Hero = props => {
  return (
    <Box
      p={['5rem 2rem', '5rem 2rem', '5rem 2rem', '0 0 5rem 5rem']}
      h={['100vh', '100vh', '100vh', 'auto']}
    >
      <SimpleGrid alignItems="center" columns={[1, 1, 1, 2]}>
        <Stack spacing={4} align="start">
          <Heading
            w={['auto', 'auto', 'auto', '80%']}
            fontSize={['28px', '28px', '28px', '44px']}
            letterSpacing="-1px"
            fontWeight="extra_bold"
            lineHeight="48px"
          >
            Temukan keindahan dan keberagaman budaya negara Indonesia.
          </Heading>
          <Text
            w={['100%', '100%', '100%', '80%']}
            color="#666666"
            fontSize={['16px', '19px']}
            letterSpacing="0px"
            lineHeight="31px"
            mb={4}
          >
            Parawisely membantu kamu untuk memilih tempat wisata di Indonesia
            yang kaya akan budaya dan keberagaman dan petualangan yang
            menunggumu di Indonesia.
          </Text>
          <SimpleGrid w={['full', 'auto']} spacing="0.5rem" columns={[1, 2]}>
            <Button
              px="4rem"
              size="lg"
              lineHeight="32px"
              letterSpacing="0.3px"
              fontWeight="extra_bold"
              fontSize="15px"
              colorScheme="blue"
            >
              Mulai sekarang
            </Button>

            <Button
              px="4rem"
              size="lg"
              lineHeight="32px"
              letterSpacing="0.3px"
              fontWeight="extra_bold"
              fontSize="15px"
              borderColor="#4737ff"
              color="#4737ff"
              variant="outline"
            >
              Rekomendasi
            </Button>
          </SimpleGrid>
        </Stack>
        <Box d={['block', 'none', 'none', 'block']}>
          <Image
            src={heroImages}
            size="xl"
            alt="Hero Section Images Parawisely"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Hero;
