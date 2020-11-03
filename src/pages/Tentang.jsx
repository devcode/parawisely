import React from 'react';
import { Icon } from '@chakra-ui/core';
import Iframe from 'react-iframe';
import {
  FaInstagram,
  FaTwitter,
  FaHome,
  FaPhoneAlt,
  FaFacebook,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import tentangKamiImages from '../assets/images/tentang-kami-images.png';

import Layout from '../components/layouts';
import Banner from '../components/sections/Banner';

const Tentang = () => {
  return (
    <Layout>
      <Banner
        title="Tentang"
        description="Beranda &nbsp; →  &nbsp; Tentang"
        image={tentangKamiImages}
      />
      <section className="contact_area mt-5">
        <div className="container">
          <div w="100%">
            <Iframe
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=SMKN%201%20CIAMIS+(Learnify)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=A&amp;output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            >
              <a href="https://www.maps.ie/coordinates.html">gps coordinates</a>
            </Iframe>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="contact_info">
                <div className="info_item">
                  <h6>
                    <Icon
                      color="blue.500"
                      as={FaHome}
                      mr="0.5rem"
                      fontSize="lg"
                    />{' '}
                    Jl.Jendral Soedirman No.269 Ciamis, Jawa Barat
                  </h6>
                  <p>
                    Diatas merupakan alamat kami, jika anda mempunyai
                    kepentingan anda dapat menuju alamat tersebut.
                  </p>
                </div>
                <div className="info_item mt-3">
                  <h6>
                    <Icon
                      color="blue.500"
                      as={FaPhoneAlt}
                      mr="0.5rem"
                      fontSize="lg"
                    />
                    (0265) 771204
                  </h6>
                  <p>
                    Anda dapat menghubungi kami lewat telepon jika kami tidak
                    merespon pesan anda lewat fitur kontak di website ini.
                  </p>
                </div>
                <div className="info_item mt-3">
                  <h6>
                    <Icon
                      color="blue.500"
                      as={MdEmail}
                      mr="0.5rem"
                      fontSize="lg"
                    />{' '}
                    apps.parawisely@gmail.com
                  </h6>
                  <p>
                    Anda dapat menghubungi kami lewat email jika anda butuh
                    informasi tentang website kami.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact_info">
                <div className="info_item">
                  <h6>
                    <Icon
                      color="blue.500"
                      as={FaFacebook}
                      mr="0.5rem"
                      fontSize="lg"
                    />{' '}
                    Parawisely - Travel Indonesia
                  </h6>
                  <p>
                    Anda dapat mengikuti kami di platform facebook agar anda
                    tidak kehilangan informasi terbaru tentang Parawisely.
                  </p>
                </div>
                <div className="info_item mt-3">
                  <h6>
                    <Icon
                      color="blue.500"
                      as={FaInstagram}
                      mr="0.5rem"
                      fontSize="lg"
                    />
                    @parawisely_travel
                  </h6>
                  <p>
                    Anda dapat mengikuti kami di platform instagram agar anda
                    tidak kehilangan informasi terbaru tentang Parawisely.
                  </p>
                </div>
                <div className="info_item mt-3">
                  <h6>
                    <Icon
                      color="blue.500"
                      as={FaTwitter}
                      mr="0.5rem"
                      fontSize="lg"
                    />{' '}
                    @parawisely_travel
                  </h6>
                  <p>
                    Anda dapat mengikuti kami di platform twitter agar anda
                    tidak kehilangan informasi terbaru tentang Parawisely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tentang;
