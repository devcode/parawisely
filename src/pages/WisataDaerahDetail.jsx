import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../components/layouts';
import { Stack, SimpleGrid, Skeleton, Box, Heading } from '@chakra-ui/core';
import CardPlace from '../components/ui/CardPlace';

import { getWisataDaerahDetail } from '../actions/wisata';
import Banner from '../components/sections/Banner';
import { capitalize } from '../utils/helper';
import Section from '../components/sections/Section';
import FilterPanel from '../components/ui/FilterPanel';

const asset = process.env.REACT_APP_BACKEND_ASSET;

const WisataDaerahDetail = ({
  getWisataDaerahDetail,
  wisata: {
    wisataDaerahDetail,
    error,
    loading,
    filteredPlaces,
    wisataDearah,
    filteredWisataDaerahPlaces,
  },
  match,
}) => {
  useEffect(() => {
    getWisataDaerahDetail(match.params.slug);
  }, [getWisataDaerahDetail, match.params.slug]);

  return (
    <Layout>
      <Banner
        image={`${asset}/island/${wisataDaerahDetail.image}`}
        title={`${capitalize(wisataDaerahDetail.name)}`}
      />
      <Section>
        {error && error.msg}
        <Stack spacing="2rem" direction={['column', 'column', 'row', 'row']}>
          <FilterPanel isWisataDearah />
          {filteredWisataDaerahPlaces.length === 0 && <div>tidak ada</div>}
          <Skeleton isLoaded={loading} w="full" minHeight="272px">
            <Box>
              <SimpleGrid spacing="1rem" columns={[2, 2, 3, 3]}>
                {filteredWisataDaerahPlaces?.places?.map((item, index) => (
                  <CardPlace key={`uwu-${item.id}`} data={item} />
                ))}
              </SimpleGrid>
            </Box>
          </Skeleton>
        </Stack>
      </Section>
    </Layout>
  );
};

WisataDaerahDetail.propTypes = {
  getWisataDaerahDetail: PropTypes.func.isRequired,
  wisata: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, { getWisataDaerahDetail })(
  WisataDaerahDetail
);
