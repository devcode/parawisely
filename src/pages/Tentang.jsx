import React from 'react';
import { Heading, Image, Text, Stack, Icon, Link } from '@chakra-ui/core';
import Layout from '../components/layouts';
import Iframe from 'react-iframe';
import tentangKamiImages from '../assets/images/tentang-kami-images.png';
import Banner from '../components/sections/Banner';

import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaRegAddressCard,
} from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const IconSosmed = ({ icon, url }) => (
  <Link href={url} isExternal>
    <Icon color="blue.500" as={icon} fontSize="lg" />
  </Link>
);

const Tentang = () => {
  return (
    <Layout>
    <Banner title="Tentang Kami" description="Beranda &nbsp; →  &nbsp; Tentang"  image={tentangKamiImages} />
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          TENTANG KAMI PARAWISELY
        </Text>
        <Heading
          className="col-md-8 mx-auto"
          fontSize="48px"
          lineHeight="56px"
          fontWeight="extra_bold"
        >
          Membuat liburan anda di Indonesia menjadi lebih seru dan berkesan!
        </Heading>
      </Stack>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Image
              h="572px"
              className="mx-auto"
            
              objectFit="cover"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 mx-auto">
            <Text
              fontSize="20px"
              lineHeight="31px"
              textAlign="justify"
              fontWeight="regular"
            >
              Parawisely merupakan website yang bertujuan untuk mengenalkan
              Indonesia pada dunia bahwa Indonesia merupakan negara yang akan
              budaya dan keberagaman, tentu di barengi keindahan alamnya membuat
              Indonesia sangat pantas untuk kamu jadikan destinasi selanjutnya.
              <br />
              <br />
              Kami juga mempunyai banyak fitur seperti peta wisata, virtual tour
              dan fitur eksplorasi yang membuat kalian dapat melihat Indonesia
              dari layar kaca anda dengan mudah.
              <br />
              <br />
              Membuat Indonesia menjadi destinasi selanjutnya merupakan
              prioritas kami, oleh karena itu semoga dengan adanya Parawisely
              anda dapat tertarik untuk mengunjungi Indonesia di waktu nanti.
              Kami tunggu kehadiran anda di Indonesia!
            </Text>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.951924275474!2d108.33019786038814!3d-7.327146037234768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5eba1b06f52f%3A0xaf882382d9de1508!2sSMK%20Negeri%201%20Ciamis!5e0!3m2!1sid!2sid!4v1603693091705!5m2!1sid!2sid"
                width="100%"
                height="560px"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen="true"
                aria-hidden="false"
                tabindex="0"
                id="myId"
                className="myClassname"
              />
            </div>
            <div className="row mt-4">
              <div className="col-md-10 mx-auto">
                <p>
                  <Text className="mx-auto" textAlign="start">
                    <Icon
                      color="blue.500"
                      as={FiMapPin}
                      mr="1rem"
                      fontSize="lg"
                    />
                    Jl. Jenderal Sudirman No. 269 RT 13/RW 09, Desa Sindangrasa,
                    Sindangrasa, Kabupaten Ciamis, Jawa Barat 46215
                  </Text>
                  <Text className="mx-auto" textAlign="start">
                    <Icon
                      color="blue.500"
                      as={FaRegAddressCard}
                      mr="1rem"
                      fontSize="lg"
                    />
                    apps.pariwisata@gmail.com
                  </Text>
                  <Text className="mx-auto" textAlign="start">
                    <Icon
                      color="blue.500"
                      as={FaInstagram}
                      mr="1rem"
                      fontSize="lg"
                    />
                    @parawisely
                  </Text>
                  <Text className="mx-auto" textAlign="start">
                    <Icon
                      color="blue.500"
                      as={FaTwitter}
                      mr="1rem"
                      fontSize="lg"
                    />
                    @parawisely
                  </Text>
                  <Text className="mx-auto" textAlign="start">
                    <Icon
                      color="blue.500"
                      as={FaFacebook}
                      mr="1rem"
                      fontSize="lg"
                    />
                    Parawisely
                  </Text>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tentang;
