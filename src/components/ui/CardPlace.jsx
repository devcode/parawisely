import React from 'react';
import { Box, Image, Text, Stack, Heading, Badge } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { BiCommentDetail } from 'react-icons/bi';

const CardPlace = ({ data }) => {
  return (
    <Box
      justifyItems="center"
      rounded="lg"
      shadow="md"
      overflow="hidden"
      height="400px"
    >
      <Image
        src={data.image}
        alt={data.name_place}
        h="200px"
        htmlHeight="200px"
        objectFit="cover"
        w="full"
      />
      <Stack
        align="baseline"
        spacing="1rem"
        alignContent="center"
        justify="space-between"
        p={5}
      >
        <Badge>{data.type.type_name}</Badge>
        <Link to={`/place/${data.slug}`}>
          <Heading
            _hover={{ color: 'blue.500' }}
            fontSize="20px"
            fontWeight="bold"
          >
            {data.name_place}
          </Heading>
        </Link>
        <Text color="gray.400">
          {data.kabupaten}, {data.provinsi}
        </Text>
        <Stack direction="row" align="center" justify="center" spacing="0.5rem">
          <Box as={BiCommentDetail} size="24px" color="blue.500" />
          <Text>{data.comments?.length} Ulasan</Text>
        </Stack>
        {/* <Stack isInline align="baseline">
          <Text
            textTransform="uppercase"
            fontSize="12px"
            color="gray.500"
            letterSpacing="wide"
          >
            {data.kabupaten.toUpperCase()} &bull; {data.provinsi.toUpperCase()}
          </Text>
        </Stack>
        <Heading fontWeight="bold" fontSize="18px" my={2}>
          {data.name_place}
        </Heading>
        <Stack isInline justify="space-between">
          <Box d="flex">
            <Text as="h5" fontSize="14px" fontWeight="semibold">
              {data.comments ? data.comments.length : 0}, Ulasan
            </Text>
          </Box>
        </Stack>
        <Link to={`/place/${data.slug}`}>
          <Text color="blue.500" fontSize="16px" mt="5px">
            Selengkapnya
          </Text>
        </Link> */}
      </Stack>
    </Box>
  );
};

export default CardPlace;
