import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FormLabel,
  FormControl,
  Select,
  Image,
  Button,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Spinner from '../components/ui/Spinner';

import eksplorasiImages from '../assets/images/eksplorasi-images.png';
import ilustrationIMG from '../assets/ilustration/ilus-ekplor.png';
import Banner from '../components/sections/Banner';

import CardRekomendasi from '../components/ui/CardRekomendasi';
import { getPlace, getTypePlace, getPlaceByType } from '../actions/wisata';

const asset = process.env.REACT_APP_BACKEND_ASSET;

const Eksplor = ({
  getPlace,
  getTypePlace,
  getPlaceByType,
  wisata: { places, typePlace },
}) => {
  useEffect(() => {
    getPlace();
    getTypePlace();
  }, [getPlace, getTypePlace]);

  const filterHandler = e => {
    getPlaceByType(parseInt(e));
  };

  return (
    <Layout>
      <Banner title="Ekplorasi Indonesia" image={eksplorasiImages} />
      <Section>
        <Stack spacing="2rem" direction={['column', 'column', 'row', 'row']}>
          <Stack minWidth="50vh">
            <Heading fontSize="14px">Total ({places?.length})</Heading>
            <FormControl
              id="country"
              onChange={e => filterHandler(e.target.value)}
            >
              <FormLabel>Kategori</FormLabel>
              <Select>
                <option value="0">Semua</option>
                {typePlace &&
                  typePlace.map((item, index) => (
                    <>
                      <option value={item.id} key={`type-${index}`}>
                        {item.type_name}
                      </option>
                    </>
                  ))}
              </Select>
            </FormControl>
          </Stack>
          <SimpleGrid spacing="1rem" columns={[2, 2, 4, 4]}>
            {places == null && <Spinner />}
            {places?.length === 0 && <p>data tidak ada</p>}
            {places &&
              places.map((item, index) => (
                <Stack key={`place-${item.slug}`} borderRadius="lg" shadow="lg">
                  <Image
                    h="272px"
                    objectFit="cover"
                    borderRadius="lg"
                    src={`${asset}/placeImage/${item.image}`}
                    fallbackSrc={item.image}
                  />
                  <Stack spacing="0.5rem" p="1rem">
                    <Heading size="sm">{item.name_place}</Heading>
                    <Stack align="center" direction="row" spacing="5px">
                      <Icon as={FaMapMarkerAlt} />
                      <Text fontSize="13px">{item.provinsi}</Text>
                    </Stack>
                    <Link to={`/place/${item.slug}`} d="block">
                      <Button size="sm" colorScheme="blue" w="full">
                        Selengkapnya
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              ))}
          </SimpleGrid>
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
            Gabung <Icon as={IoIosArrowRoundForward} boxSize="2rem" ml="4px" />
          </Button>
        </Stack>
      </CardRekomendasi>
    </Layout>
  );
};

Eksplor.propTypes = {
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
})(Eksplor);
