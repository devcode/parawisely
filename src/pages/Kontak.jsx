import {
  Box,
  Button,
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
} from '@chakra-ui/core';
import React from 'react';

import Layout from '../components/layouts';

const FormInput = ({ id, type, label }) => (
  <FormControl id={id}>
    <FormLabel>{label}</FormLabel>
    <Input type={type} />
  </FormControl>
);

const Kontak = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12 display-6 font-weight-bold">
            Hubungi Kami
          </div>
          <div className="col-md-12 mt-2" style={{ fontSize: 16 }}>
            {' '}
            Hubungi kami sekarang untuk mengenal lebih jauh Parawisely bisa
            membantu kamu dalam{' '}
            <b> tempat wisata, virtual tour dan liburan di Indonesia.</b>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5">
            <FormControl className="mt-3" id="nama_lengkap">
              <FormLabel>Nama Lengkap</FormLabel>
              <Input type="name" />
            </FormControl>
            <FormControl className="mt-3" id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl className="mt-3" id="pesan">
              <FormLabel>Apa pesanmu?</FormLabel>
              <Textarea placeholder="Here is a sample placeholder" />
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
                Anda bisa menjelajahi fitur eksplorasi, wisata daerah dan fitur
                virtual tour untuk menikmati fitur Parawisely.
              </p>
            </div>
            <div className="mt-3">
              <p>
                {' '}
                <b> Jika anda merupakan pengelola tempat pariwisata </b>
              </p>
              <p>
                Jika tempat anda tidak terdaftar di Database kami, anda dapat
                memasukan nya secara manual dengan fitur mitra pariwisata.
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
