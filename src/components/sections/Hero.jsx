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
  Link,
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
            textAlign="justify"
          >
            Parawisely membantu kamu untuk memilih tempat wisata di Indonesia
            yang kaya akan budaya dan keberagaman serta petualangan yang
            menunggumu di Indonesia.
          </Text>
          <SimpleGrid w={['full', 'auto']} spacing="8px" columns={[1, 2]}>
            <Link href="#mulai-sekarang-target">
              <Button
                px="4rem"
                size="lg"
                lineHeight="32px"
                letterSpacing="0.3px"
                fontWeight="extra_bold"
                fontSize="15px"
                colorScheme="blue"
                className="button-hero"
              >
                Mulai sekarang
              </Button>
            </Link>
            <Link href="/rekomendasi" isExternal>
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
            </Link>
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
