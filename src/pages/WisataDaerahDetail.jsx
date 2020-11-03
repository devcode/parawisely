import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Stack, SimpleGrid, Skeleton, Box } from '@chakra-ui/core';

import CardPlace from '../components/ui/CardPlace';
import Layout from '../components/layouts';
import Banner from '../components/sections/Banner';
import Section from '../components/sections/Section';
import FilterPanel from '../components/ui/FilterPanel';

import { getWisataDaerahDetail } from '../actions/wisata';
import { capitalize } from '../utils/helper';

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
        image={wisataDaerahDetail.image}
        title={`${capitalize(wisataDaerahDetail.name)}`}
      />
      <Section>
        {error && error.msg}
        <Stack spacing="2rem" direction={['column', 'column', 'row', 'row']}>
          <FilterPanel isWisataDearah />
          <Skeleton
            isLoaded={filteredWisataDaerahPlaces.length !== 0}
            w="full"
            minHeight="272px"
          >
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
