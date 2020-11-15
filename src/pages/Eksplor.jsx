import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Link,
  Button,
  Icon,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Skeleton,
} from '@chakra-ui/core';
import { IoIosArrowRoundForward } from 'react-icons/io';

import eksplorasiImages from '../assets/images/eksplorasi-images.png';
import ilustrationIMG from '../assets/ilustration/ilus-ekplor.png';

import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import CardPlace from '../components/ui/CardPlace';

import Banner from '../components/sections/Banner';
import CardRekomendasi from '../components/ui/CardRekomendasi';
import FilterPanel from '../components/ui/FilterPanel';

import {
  getPlace,
  getPlaceByType,
  filterPlace,
  getPlaces,
} from '../actions/wisata';

const base_url = process.env.REACT_APP_BACKEND_URL;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Eksplor = ({ getPlace, wisata: { places, error, filteredPlaces } }) => {
  const type = useQuery();

  useEffect(() => {
    getPlace(type.get('type'));
  }, [getPlace]);

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
          <FilterPanel />
          <Skeleton isLoaded={places.length > 0} w="full" minHeight="272px">
            <Box>
              <SimpleGrid spacing="1rem" columns={[2, 2, 3, 3]}>
                {filteredPlaces?.map((item, index) => (
                  <CardPlace key={`uwu-${item.id}`} data={item} />
                ))}
              </SimpleGrid>
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
            <Link href={`${base_url}registrasi`} isExternal>
              Gabung
              <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="3px" />
            </Link>
          </Button>
        </Stack>
      </CardRekomendasi>
    </Layout>
  );
};

Eksplor.propTypes = {
  filterPlace: Proptypes.func.isRequired,
  getPlaces: Proptypes.func.isRequired,
  getPlace: Proptypes.func.isRequired,
  getPlaceByType: Proptypes.func.isRequired,
  wisata: Proptypes.object.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, {
  getPlace,
  getPlaceByType,
  getPlaces,
  filterPlace,
})(Eksplor);
