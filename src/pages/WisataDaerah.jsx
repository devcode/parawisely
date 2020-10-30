import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Heading, Icon, Skeleton, Stack, Text, Image } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Banner from '../components/sections/Banner';
import { BsClock } from 'react-icons/bs';

import wisataDaerahImages from '../assets/images/wisata-daerah-images.png';
import WisataDaerahIMG from '../assets/images/hero.png';
import { Link } from 'react-router-dom';

import { getWisataDaerah } from '../actions/wisata';

import { FaMapMarkerAlt } from 'react-icons/fa';

const asset = process.env.REACT_APP_BACKEND_ASSET;

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
              shadow="rgba(0, 0, 0, 0) 0px 0.9px 3.2px 0px, rgba(0, 0, 0, 0.004) 0px 2.1px 7.1px 0px, rgba(0, 0, 0, 0.004) 0px 3.5px 12.1px 0px, rgba(0, 0, 0, 0.008) 0px 5.4px 18.7px 0px, rgba(0, 0, 0, 0.01) 0px 8.1px 27.7px 0px, rgba(0, 0, 0, 0.016) 0px 11.8px 40.7px 0px, rgba(0, 0, 0, 0.02) 0px 17.7px 60.9px 0px, rgba(0, 0, 0, 0.03) 0px 28.3px 97.1px 0px, rgba(0, 0, 0, 0.07) 0px 53px 182px 0px
              "
              borderRadius="md"
              p={8}
              spacing="2rem"
              mb="20px"
            >
              <Image
                src={`${asset}/island/${item.image}`}
                objectFit="cover"
                width="150px"
                htmlWidth="150px"
                h="144px"
                borderRadius="md"
              />
              <Stack align="start" w="60%">
                <Heading fontSize="32px" fontWeight="extra_bold">
                  {item.name}
                </Heading>
                <Text>{item.description}</Text>
                <Link to={`/wisata-daerah/${item.slug}`}>Selengkapnya ...</Link>
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
