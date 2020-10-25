import React from 'react';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import PostComment from '../components/ui/PostComment';
import { Stack, Heading, Text, Image } from '@chakra-ui/core';
import Spinner from '../components/ui/Spinner';
import Comment from '../components/ui/Comment';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getPlaceDetail } from '../api/fetchData';

const ASSET = process.env.REACT_APP_BACKEND_ASSET;

const DetailWisata = () => {
  const { slug } = useParams();
  const { data, isLoading, error, status } = useQuery('detail-wisata', () =>
    getPlaceDetail(slug)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  if (status === 'success') {
    console.log({ data });
    return (
      <Layout>
        {isLoading && <Spinner />}
        {error && <div>{error.message}</div>}
        {data && (
          <div>
            <Stack textAlign="center" pt="2.5rem">
              <Heading fontWeight="extra_bold">{data.data.name_place}</Heading>
              <Text className="col-md-6 mx-auto" color="gray.500">
                {data.data.kabupaten}, {data.data.provinsi}
              </Text>
            </Stack>
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-12 ">
                  <Image
                    src={`${ASSET}/${data.data.image}`}
                    fallbackSrc="https://via.placeholder.com/1920x720"
                    objectFit="fit"
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-md-10 mx-auto">
                    <Text
                      fontSize="48px"
                      className="m-5 text-center"
                      fontWeight="extra_bold"
                    >
                      {data.data.name_place}
                    </Text>
                    <Text
                      fontSize="16px"
                      textAlign="justify"
                      fontWeight="regular"
                    >
                      {data.data.description}
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <Section>
              <Stack spacing="1rem">
                <PostComment place_id={data.data.id} />
                <Comment data={data.data.name_place} />
              </Stack>
            </Section>
          </div>
        )}
      </Layout>
    );
  }
};

export default DetailWisata;