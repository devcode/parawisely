import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Link,
} from '@chakra-ui/core';
import React from 'react';
import { FaMoneyCheck, FaMap, FaCalendar, FaClone } from 'react-icons/fa';

import kontakImages from '../assets/images/kontak-images.png';
import Banner from '../components/sections/Banner';
import Layout from '../components/layouts';
import Section from '../components/sections/Section';

const FaqItem = ({ icon, title, description }) => (
  <Stack spacing="1.5rem" direction="row" align="start">
    <IconButton isRound icon={icon} />
    <Stack>
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </Stack>
  </Stack>
);

const Kontak = () => {
  return (
    <Layout>
     <Banner title="Kontak Kami" description="Beranda &nbsp; →  &nbsp; Kontak"  image={kontakImages} />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12 display-6 font-weight-bold">
            Hubungi Kami
          </div>
          <div className="col-md-12 mt-3" style={{ fontSize: 16 }}>
            {' '}
            Hubungi kami sekarang untuk mengenal lebih jauh Parawisely bisa
            membantu kamu dalam{' '}
            <b> tempat wisata, virtual tour dan liburan di Indonesia.</b>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-5">
            <FormControl id="nama_lengkap">
              <FormLabel>
                Nama Lengkap <span style={{ color: '#10a0ff' }}>*</span>{' '}
              </FormLabel>
              <Input type="name" />
            </FormControl>
            <FormControl className="mt-3" id="email">
              <FormLabel>
                Alamat Email <span style={{ color: '#10a0ff' }}>*</span>
              </FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl className="mt-3" id="pesan">
              <FormLabel>
                Apa Pesanmu? <span style={{ color: '#10a0ff' }}>*</span>
              </FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="blue" px="4rem" className="mt-3">
              Submit
            </Button>
          </div>
          <div className="col-md-7">
            <p className="font-weight-bold" style={{ fontSize: 24 }}>
              Tanya bagaimana cara kami membantu anda:
            </p>
            <div className="mt-3">
              <p>
                {' '}
                <b> Bagaimana cara memakai fitur Parawisely</b>
              </p>
              <p>
                Anda bisa menjelajahi fitur{' '}
                <Link color="blue.500" href="/eksplorasi">
                  {' '}
                  eksplorasi{' '}
                </Link>
                ,{' '}
                <Link color="blue.500" href="/wisata-daerah">
                  wisata daerah
                </Link>{' '}
                dan fitur{' '}
                <Link color="blue.500" href="/virtual-tour">
                  {' '}
                  virtual tour{' '}
                </Link>
                untuk menikmati fitur Parawisely.
              </p>
            </div>
            <div className="mt-3">
              <p>
                {' '}
                <b> Jika anda merupakan pengelola tempat pariwisata </b>
              </p>
              <p>
                Jika tempat anda tidak terdaftar di Database kami, anda dapat
                memasukan nya secara manual dengan fitur{' '}
                <Link color="blue.500" href="/mitra-pariwisata">
                  {' '}
                  mitra pariwisata.
                </Link>
              </p>
            </div>
            <div className="mt-3">
              <p>
                {' '}
                <b> Mengalami kesalahan dan bug </b>
              </p>
              <p>
                Anda dapat menghubungi kami dengan mengisi form di sebelah kiri
                anda, lalu akan kami balas secepatnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontak;
