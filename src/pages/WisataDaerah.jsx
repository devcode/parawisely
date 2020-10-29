import React from 'react';
import { useQuery } from 'react-query';
import { Heading, Icon, Image, Stack, Text, Button } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';
import Banner from '../components/sections/Banner';
import { BsClock, BsBookmarks, BsEye } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';
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
                    shadow="
 rgba(0, 0, 0, 0) 0px 0.9px 3.2px 0px, rgba(0, 0, 0, 0.004) 0px 2.1px 7.1px 0px, rgba(0, 0, 0, 0.004) 0px 3.5px 12.1px 0px, rgba(0, 0, 0, 0.008) 0px 5.4px 18.7px 0px, rgba(0, 0, 0, 0.01) 0px 8.1px 27.7px 0px, rgba(0, 0, 0, 0.016) 0px 11.8px 40.7px 0px, rgba(0, 0, 0, 0.02) 0px 17.7px 60.9px 0px, rgba(0, 0, 0, 0.03) 0px 28.3px 97.1px 0px, rgba(0, 0, 0, 0.07) 0px 53px 182px 0px

"
                    borderRadius="5px"
                    p="30px"
                    spacing="4rem"
                    mb="3rem"
                  >
                    <Image
                      src={WisataDaerahIMG}
                      objectFit="cover"
                      h="144px"
                      borderRadius="md"
                    />
                    <Stack align="start" w="60%">
                      <Heading fontSize="32px" fontWeight="extra_bold">{item.name}</Heading>
                      <Text>{item.description}</Text>
                         <Button colorScheme="blue" px="4rem">
              Selengkapnya →
            </Button> 
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
