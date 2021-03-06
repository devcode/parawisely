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
  Flex,
} from '@chakra-ui/core';

const Hero = props => {
  return (
    <Box
      p={['5rem 2rem', '5rem 2rem', '5rem 2rem', '0 0 5rem 5rem']}
      h={['100vh', '100vh', '100vh', 'auto']}
    >
      <SimpleGrid alignItems="center" columns={[1, 1, 1, 2]}>
        <Stack spacing={5} align="start">
          <Text w="100%" fontWeight="extra_bold" color="blue.500">
            SELAMAT DATANG DI PARAWISELY
          </Text>
          <Heading
            w={['auto', 'auto', 'auto', '80%']}
            fontSize={['28px', '28px', '28px', '44px']}
            letterSpacing="-1px"
            fontWeight="extra_bold"
          >
            Temukan keindahan dan keberagaman budaya negara Indonesia.
          </Heading>
          <Text
            w={['100%', '100%', '100%', '80%']}
            color="#666666"
            textAlign="start"
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
                isFullWidth={{ base: true, md: false }}
              >
                Mulai sekarang &nbsp;→
              </Button>
            </Link>
            <Link href="/ekplorasi" isExternal>
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
                isFullWidth={{ base: true, md: false }}
              >
                Ekplorasi
              </Button>
            </Link>
          </SimpleGrid>
        </Stack>
        <Box d={['none', 'none', 'none', 'block']}>
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
