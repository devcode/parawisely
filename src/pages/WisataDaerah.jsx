import React from 'react';
import { useQuery } from 'react-query';
import { Heading, Icon, Image, Stack, Text } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Banner from '../components/sections/Banner';
import { BsClock, BsBookmarks, BsEye } from 'react-icons/bs';
import Spinner from '../components/ui/Spinner';

import wisataDaerahImages from '../assets/images/wisata-daerah-images.png';
import WisataDaerahIMG from '../assets/images/hero.png';
import { Link } from 'react-router-dom';

import { getWisataDaerah } from '../api/fetchData';

const WisataDaerah = () => {
  const { data, error, status } = useQuery(
    'wisata-daerah-wtf',
    getWisataDaerah
  );

  console.log({ data });

  return (
    <Layout>
      <Banner title="Wisata Daerah" description="Beranda &nbsp; →  &nbsp; Wisata Daerah"  image={wisataDaerahImages} />
      <Section>
        {status === 'loading' && <Spinner />}
        {status === 'error' && <p>Error : {error.message}</p>}
        {status === 'success' && (
          <div>
            {data.status_code === 404 && <p>tidak ada</p>}
            {data.status_code === 200 && (
              <>
                {data.data.map((item, index) => (
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
                      <Link>Selengkapnya ...</Link>
                    </Stack>
                    <Stack>
                      <Stack spacing="10px" align="center" direction="row">
                        <Icon as={BsClock} />
                        <Text>{item.places.length} Tempat</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                ))}
              </>
            )}
          </div>
        )}
      </Section>
    </Layout>
  );
};

export default WisataDaerah;
