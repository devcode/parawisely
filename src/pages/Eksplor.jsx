import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Box,
  Alert,
  AlertIcon,
  Checkbox,
  FormLabel,
  FormControl,
  Button,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Skeleton,
} from '@chakra-ui/core';
import { IoIosArrowRoundForward } from 'react-icons/io';
import ReduxLazyScroll from 'redux-lazy-scroll';

import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import CardPlace from '../components/ui/CardPlace';

import eksplorasiImages from '../assets/images/eksplorasi-images.png';
import ilustrationIMG from '../assets/ilustration/ilus-ekplor.png';
import Banner from '../components/sections/Banner';

import CardRekomendasi from '../components/ui/CardRekomendasi';
import {
  getPlace,
  getTypePlace,
  getPlaceByType,
  getPlaces,
} from '../actions/wisata';
import SearchBar from '../components/ui/SearchBar';

const asset = process.env.REACT_APP_BACKEND_ASSET;

const Eksplor = ({
  getPlaces,
  getPlace,
  getTypePlace,
  getPlaceByType,
  wisata: {
    places,
    typePlace,
    loading,
    error,
    filteredPlaces,
    page,
    limit,
    isFetching,
    hasMore,
  },
}) => {
  console.log({ page, limit });
  useEffect(() => {
    getTypePlace();
  }, [getTypePlace]);

  const loadPlaces = () => {
    getPlaces(page, limit);
  };

  const filterHandler = e => {
    getPlaceByType(parseInt(e));
  };

  return (
    <Layout>
      <Banner
        title="Ekplorasi"
        description="Beranda &nbsp; →  &nbsp; Eksplorasi"
        image={eksplorasiImages}
      />
      <Section>
        {error && error.msg}
        <Stack spacing="2rem" direction={['column', 'column', 'row', 'row']}>
          <Stack minWidth="50vh" spacing="1rem">
            <Heading fontSize="14px">Total ({filteredPlaces?.length})</Heading>
            <SearchBar />
            <FormControl onChange={e => alert(e.target.value)}>
              <FormLabel>Kategori</FormLabel>
              <Stack>
                <Checkbox defaultIsChecked>Semua</Checkbox>
                {typePlace?.map((item, idx) => (
                  <Checkbox value={item.id} key={`alsdklaskdl-${idx}`}>
                    {item.type_name}
                  </Checkbox>
                ))}
              </Stack>
            </FormControl>
          </Stack>
          <Skeleton isLoaded={places.length > 0} w="full" minHeight="272px">
            <Box>
              {' '}
              <ReduxLazyScroll
                isFetching={isFetching}
                error={error}
                loadMore={loadPlaces}
                hasMore={hasMore}
              >
                <SimpleGrid spacing="1rem" columns={[2, 2, 3, 3]}>
                  {filteredPlaces?.map((item, index) => (
                    <div>
                      <CardPlace key={`uwu-${item.id}`} data={item} />
                      {item.length > 10 && <div>loadmore</div>}
                    </div>
                  ))}
                </SimpleGrid>
              </ReduxLazyScroll>
            </Box>
          </Skeleton>
        </Stack>
      </Section>

      <CardRekomendasi image={ilustrationIMG}>
        <Stack spacing="1rem" align="start">
          <Heading>Masih bingung cari tempat yang cocok?</Heading>
          <Text>
            Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
            tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
            berikan.
          </Text>
          <Button mt="1rem" background="white" color="blue.800">
            Gabung <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="3px" />
          </Button>
        </Stack>
      </CardRekomendasi>
    </Layout>
  );
};

Eksplor.propTypes = {
  getPlaces: Proptypes.func.isRequired,
  getPlace: Proptypes.func.isRequired,
  getTypePlace: Proptypes.func.isRequired,
  getPlaceByType: Proptypes.func.isRequired,
  wisata: Proptypes.object.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, {
  getPlace,
  getTypePlace,
  getPlaceByType,
  getPlaces,
})(Eksplor);
