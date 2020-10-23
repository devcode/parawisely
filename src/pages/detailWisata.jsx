import React from 'react';
import { Box, Divider, Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';
import TentangIMG from '../assets/images/tentang.jpg';
import Section from '../components/sections/Section';
import LokasiCarousel from '../components/sections/LokasiCarousel';
import Spinner from '../components/ui/Spinner';
import { getDestinasiPilihan } from '../api/fetchData';
import { useQuery } from 'react-query';

const detailWisata = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Heading fontWeight="extra_bold">Candi Borobudur</Heading>
        <Text className="col-md-6 mx-auto" color="gray.500">
          Yogyakarta, Indonesia
        </Text>
      </Stack>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 ">
            <Image src={TentangIMG} objectFit="fit" />
          </div>
          <div className="row mt-3">
            <div className="col-md-10 mx-auto">
              <Text
                fontSize="24px"
                className="m-5 text-center"
                fontWeight="extra_bold"
              >
                Yogyakarta
              </Text>
              <Text fontSize="16px" fontWeight="regular">
                Bersama dengan kota sahabatnya Surakarta (Solo), Yogyakarta
                adalah asal mula peradaban di Tanah Jawa. Kota ini pernah
                menjadi singgasana yang menghasilkan Candi Borobudur and
                Prambanan yang begitu megah pada abad ke-8 dan ke-9 serta tempat
                berkuasanya kerajaan Mataram pada abad ke-16 dan ke-17.
                Yogyakarta pernah dikenal dengan slogannya yang berbunyi “Jogja
                The Neverending Asia“ berkat daya tariknya yang luar biasa.
                Sekarang, kota ini juga dikenal sebagai “Jogja Istimewa“ karena
                nilai-nilainya yang dianut begitu eloknya. Kota ini adalah salah
                satu dari beberapa pusat kebudayaan di Indonesia. Setiap
                pengunjung bisa menjelajahinya dengan berjalan-jalan di Museum
                Keraton (Istana Sultan), bercengkrama di Alun Alun Kota, melihat
                proses pembuatan perhiasan di Kotagede, sampai berbelanja di
                Malioboro. Banyak petualangan yang bisa Sobat Pesona lakukan di
                kota yang relatif kecil namun penuh dengan kehidupan ini, salah
                satunya adalah mengejar matahari terbit di candi-candi terkenal
                seperti Prambanan dan Borobudur di kota tetangga di Magelang.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default detailWisata;
