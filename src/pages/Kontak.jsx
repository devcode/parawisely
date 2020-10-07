import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/core';
import React from 'react';

import KontakIMG from '../assets/images/kontak.jpg';

import Layout from '../components/layouts';
import Wraper from '../components/layouts/Wraper';

const FormInput = ({ id, type, label }) => (
  <FormControl id={id}>
    <FormLabel>{label}</FormLabel>
    <Input type={type} />
  </FormControl>
);

const Kontak = () => {
  return (
    <Layout>
      <Image h="572px" src={KontakIMG} objectFit="cover" />
      <Wraper>
        <Box textAlign="center" mx="auto" w="70%">
          <Heading>Kontak Kami</Heading>
          <Text>
            Telusuri keindahan dan keberagaman berbagai budaya negara Indonesia
            bersama dengan kami anda bisa menikmati indahnya negara Indonesia
          </Text>
        </Box>
        <Stack spacing="1rem" mt="3rem">
          <FormInput id="nama_lengkap" type="name" label="Nama Lengkap" />
          <FormInput id="email" type="email" label="Email" />
          <FormInput id="website" type="url" label="Website" />
          <FormControl id="country">
            <FormLabel>Subject</FormLabel>
            <Select placeholder="Pilih">
              <option>Promosi dan Penawaran</option>
              <option>Pertanyaan tentang afiliasi</option>
              <option>Komentar tentang website</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Pesan</FormLabel>
            <Textarea />
          </FormControl>

          <Button colorScheme="purple">Submit</Button>
        </Stack>
      </Wraper>
    </Layout>
  );
};

export default Kontak;
