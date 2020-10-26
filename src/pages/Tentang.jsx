import React from 'react';
import { Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';

import aboutImages from '../assets/images/about-images.png';

const Tentang = () => {
  return (
    <Layout>
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
              src={aboutImages}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 mx-auto">
            <Text
              fontSize="20px"
              lineHeight="31px"
              textAlign="center"
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
        </div>
      </div>
    </Layout>
  );
};

export default Tentang;
