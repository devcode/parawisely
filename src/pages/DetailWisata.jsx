import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import {
  Stack,
  Heading,
  Text,
  Image,
  Box,
  StackDivider,
  Skeleton,
  SimpleGrid,
} from '@chakra-ui/core';
import MapPlace from '../components/ui/map/MapPlace';

import { getPlaceDetail } from '../actions/wisata';
import CommentForm from '../components/ui/comments/CommentForm';
import CommentItem from '../components/ui/comments/CommentItem';

import { capitalize } from '../utils/helper';

const asset = process.env.REACT_APP_BACKEND_ASSET;

const DetailWisata = ({ getPlaceDetail, wisata: { place }, match }) => {
  useEffect(() => {
    getPlaceDetail(match.params.slug);
  }, [getPlaceDetail, match.params.slug]);

  return (
    <Layout>
      <MapPlace longitude={place.longitude} latitude={place.latitude} />
      <Section>
        <Skeleton isLoaded={place.image}>
          <Image
            src={`${asset}/placeImage/${place.image}`}
            h="350px"
            w="full"
            fallbackSrc="https://via.placeholder.com/1920x250"
            objectFit="cover"
          />
        </Skeleton>
        <Skeleton isLoaded={place.name_place}>
          <Stack mt="2rem" spacing="0.5rem">
            <Heading fontSize="28px" fontWeight="bold">
              {place.name_place}
            </Heading>
            <Text color="gray.500">
              {place.kabupaten?.toLowerCase()}, {place.provinsi?.toLowerCase()}
            </Text>
            <Text fontSize="16px" textAlign="justify" fontWeight="regular">
              {place.description}
            </Text>
          </Stack>
        </Skeleton>

        <Section>
          <Skeleton isLoaded={place.comments}>
            <SimpleGrid columns={[1, 1, 2, 2]} spacing="1rem">
              <CommentForm place_id={place.id} />
              <Box borderRadius="md" shadow="md" p="2rem">
                <Heading fontSize="24px">
                  Ulasan ({place?.comments?.length}){' '}
                </Heading>
                <Stack
                  spacing="2rem"
                  divider={<StackDivider borderColor="gray.300" />}
                  mt="2rem"
                >
                  {place?.comments?.map((item, idx) => (
                    <CommentItem key={`maksd-${item.id}`} comment={item} />
                  ))}
                </Stack>
              </Box>
            </SimpleGrid>
          </Skeleton>
        </Section>
      </Section>
    </Layout>
  );
};

DetailWisata.propTypes = {
  getPlaceDetail: Proptypes.func.isRequired,
  wisata: Proptypes.object.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, {
  getPlaceDetail,
})(DetailWisata);
