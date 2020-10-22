import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Heading } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Spinner from '../components/ui/Spinner';

import { getPlaceDetail } from '../api/fetchData';
import { useParams } from 'react-router-dom';

const PlaceDetail = () => {
  const { slug } = useParams();
  const { data, status, error } = useQuery('place-detail', () =>
    getPlaceDetail(slug)
  );

  return (
    <Layout>
      <Section>
        {status === 'loading' && <Spinner />}
        {status === 'error' && <div>Error</div>}
        {status === 'success' && data.data > 0 && (
          <Heading>{data.data.name_place}</Heading>
        )}
      </Section>
    </Layout>
  );
};

export default PlaceDetail;
