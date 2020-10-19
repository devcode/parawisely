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

import KontakIMG from '../assets/images/kontak.jpg';
import { FaMoneyCheck, FaMap, FaCalendar, FaClone } from 'react-icons/fa';

import Layout from '../components/layouts';
import Wraper from '../components/layouts/Wraper';
import Section from '../components/sections/Section';

const FormInput = ({ id, type, label }) => (
  <FormControl id={id}>
    <FormLabel>{label}</FormLabel>
    <Input type={type} />
  </FormControl>
);

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
          <Button colorScheme="blue">Submit</Button>
        </Stack>
      </Wraper>

      <Section>
        <Heading>FAQ</Heading>
        <SimpleGrid spacing="2rem" mt="2rem" columns={[1, 1, 1, 2]}>
          <FaqItem
            icon={<FaMoneyCheck />}
            title="Apakah ke indonesia mahal?"
            description="Tidak mahal kok, buat kamu wisatawan bisa datang ke indonesia dengan harga yang terjangkau lho!"
          />
          <FaqItem
            icon={<FaMap />}
            title="Apakah ke indonesia mahal?"
            description="Tidak mahal kok, buat kamu wisatawan bisa datang ke indonesia dengan harga yang terjangkau lho!"
          />
          <FaqItem
            icon={<FaCalendar />}
            title="Apakah ke indonesia mahal?"
            description="Tidak mahal kok, buat kamu wisatawan bisa datang ke indonesia dengan harga yang terjangkau lho!"
          />
          <FaqItem
            icon={<FaClone />}
            title="Apakah ke indonesia mahal?"
            description="Tidak mahal kok, buat kamu wisatawan bisa datang ke indonesia dengan harga yang terjangkau lho!"
          />
        </SimpleGrid>
      </Section>
    </Layout>
  );
};

export default Kontak;
