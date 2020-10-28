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
} from '@chakra-ui/core';
import Spinner from '../components/ui/Spinner';
import Comment from '../components/ui/Comment';
import { useParams } from 'react-router-dom';

import { getPlaceDetail } from '../actions/wisata';
import CommentForm from '../components/ui/comments/CommentForm';
import CommentItem from '../components/ui/comments/CommentItem';

const asset = process.env.REACT_APP_BACKEND_ASSET;

const DetailWisata = ({ getPlaceDetail, wisata: { place }, match }) => {
  useEffect(() => {
    getPlaceDetail(match.params.slug);
  }, [getPlaceDetail, match.params.slug]);

  return (
    <Layout>
      <Section>
        <Skeleton isLoaded={place.name_place}>
          <Stack textAlign="center" pt="2.5rem">
            <Heading fontWeight="extra_bold">{place.name_place}</Heading>
            <Text className="col-md-6 mx-auto" color="gray.500">
              {place.kabupaten}, {place.provinsi}
            </Text>
          </Stack>
        </Skeleton>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 ">
              <Skeleton isLoaded={place.image}>
                <Image
                  src={`${asset}/placeImage/${place.image}`}
                  h="720px"
                  w="1920px"
                  fallbackSrc="https://via.placeholder.com/1920x720"
                  objectFit="fit"
                />
              </Skeleton>
            </div>
            <div className="row mt-3">
              <div className="col-md-10 mx-auto">
                <Text
                  fontSize="48px"
                  className="m-5 text-center"
                  fontWeight="extra_bold"
                >
                  {place.name_place}
                </Text>
                <Text fontSize="16px" textAlign="justify" fontWeight="regular">
                  {place.description}
                </Text>
              </div>
            </div>
          </div>
        </div>

        <Section>
          <Skeleton isLoaded={place.comments}>
            <Stack spacing="1rem">
              {/* <Comment place_id={place.data.id} data={place.data.comments} /> */}
              <CommentForm place_id={place.id} />
              <Heading fontSize="24px">
                Ulasan ({place?.comments?.length}){' '}
              </Heading>

              <Box borderRadius="md" shadow="md" p="2rem">
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

              {/* <CommentItem comments={place.comments} /> */}
            </Stack>
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
