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
            membantu kamu dalam tempat wisata, virtual tour dan liburan di
            Indonesia.
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5">
            <FormInput id="nama_lengkap" type="name" label="Nama Lengkap" />
            <FormInput id="email" type="email" label="Email" />
            <Text>Apa pesanmu?</Text>
            <Textarea placeholder="Here is a sample placeholder" />
            <Button colorScheme="blue">Submit</Button>
          </div>
          <div className="col-md-7">
            <p className="font-weight-bold" style={{ fontSize: 24 }}>
              Ask How We Can Help You:
            </p>
            <div className="mt-3">
              <p>See our platform in action</p>
              <p>
                Request a personalized demo of Fellow, or sign up for a free
                account.
              </p>
            </div>
            <div className="mt-3">
              <p>See our platform in action</p>
              <p>
                Request a personalized demo of Fellow, or sign up for a free
                account.
              </p>
            </div>
            <div className="mt-3">
              <p>See our platform in action</p>
              <p>
                Request a personalized demo of Fellow, or sign up for a free
                account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontak;
