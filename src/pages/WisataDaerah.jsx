import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Heading, Icon, Image, Skeleton, Stack, Text } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Banner from '../components/sections/Banner';
import { BsClock } from 'react-icons/bs';

import wisataDaerahImages from '../assets/images/wisata-daerah-images.png';
import WisataDaerahIMG from '../assets/images/hero.png';
import { Link } from 'react-router-dom';

import { getWisataDaerah } from '../actions/wisata';

const WisataDaerah = ({
  getWisataDaerah,
  wisata: { wisataDaerah, isFetching },
}) => {
  useEffect(() => {
    getWisataDaerah();
  }, [getWisataDaerah]);

  return (
    <Layout>
      <Banner
        title="Wisata Daerah"
        description="Beranda &nbsp; →  &nbsp; Wisata Daerah"
        image={wisataDaerahImages}
      />
      <Section>
        <div>
          {Object.keys(wisataDaerah).length === 0 && (
            <Skeleton w="full" h="300px" />
          )}
          {wisataDaerah.map((item, index) => (
            <Stack
              key={`alskdl-${index}`}
              direction="row"
              shadow="lg"
              borderRadius="md"
              p={8}
              spacing="2rem"
            >
              <Image
                src={WisataDaerahIMG}
                objectFit="cover"
                h="144px"
                borderRadius="md"
              />
              <Stack align="start" w="60%">
                <Heading fontSize="22px">{item.name}</Heading>
                <Text>{item.description}</Text>
                <Link to={`/wisata-daerah/${item.slug}`}>Selengkapnya ...</Link>
              </Stack>
              <Stack>
                <Stack spacing="10px" align="center" direction="row">
                  <Icon as={BsClock} />
                  <Text>{item.places.length} Tempat</Text>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

WisataDaerah.propTypes = {
  getWisataDaerah: PropTypes.func.isRequired,
  wisata: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  wisata: state.wisata,
});

export default connect(mapStateToProps, { getWisataDaerah })(WisataDaerah);
