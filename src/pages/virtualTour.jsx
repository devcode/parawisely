import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Heading, Image, Text, Stack } from '@chakra-ui/core';
import Layout from '../components/layouts';
import candiBorobudur from '../assets/images/candi-borobudur.jpeg';
import danauToba from '../assets/images/danau-toba.jpeg';
import keratonYogyakarta from '../assets/images/keraton-yogyakarta.jpeg';
import labuanBajo from '../assets/images/labuan-bajo.jpeg';
import rajaAmpat from '../assets/images/raja-ampat.jpeg';
import pantaiPangandaran from '../assets/images/pantai-pangandaran.jpeg';
import '../stylesheets/html.css';

const virtualTour = () => {
  return (
    <Layout>
      <Stack textAlign="center" pt="2.5rem">
        <Text w="100%" fontWeight="extra_bold" color="blue.500">
          VIRTUAL TOUR INDONESIA
        </Text>
        <Heading fontWeight="extra_bold">
          Jelajahi Indonesia Dengan Virtual Tour
        </Heading>
        <Text className="col-md-6 mx-auto">
          Nikmati keindahan negara Indonesia dari layar anda dengan fitur
          Virtual Tour dari Parawisely yang membantu anda untuk menjelajahi
          Indonesia secara online.
        </Text>
      </Stack>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4">
              <RouterLink to="/virtual-tour/candi-borobudur">
                <div className="card m-2 virtual-tour-card" w="18rem">
                  <Image h="400px" src={candiBorobudur} objectFit="cover" />
                  <div className="card-body">
                    <h2 className="card-title text-center font-weight-bold">
                      Candi Borobudur
                    </h2>
                  </div>
                </div>
              </RouterLink>
            </div>

            <div className="col-md-4">
              <RouterLink to="/virtual-tour/danau-toba">
                <div className="card m-2 virtual-tour-card" w="18rem">
                  <Image h="400px" src={danauToba} objectFit="cover" />
                  <div className="card-body">
                    <h2 className="card-title text-center font-weight-bold">
                      Danau Toba
                    </h2>
                  </div>
                </div>
              </RouterLink>
            </div>

            <div className="col-md-4">
              <RouterLink to="/virtual-tour/keraton-yogyakarta">
                <div className="card m-2 virtual-tour-card" w="18rem">
                  <Image h="400px" src={keratonYogyakarta} objectFit="cover" />
                  <div className="card-body">
                    <h2 className="card-title text-center font-weight-bold">
                      Keraton Yogyakarta
                    </h2>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <RouterLink to="/virtual-tour/labuan-bajo">
                <div className="card m-2 virtual-tour-card" w="18rem">
                  <Image h="400px" src={labuanBajo} objectFit="cover" />
                  <div className="card-body">
                    <h2 className="card-title text-center font-weight-bold">
                      Labuan Bajo
                    </h2>
                  </div>
                </div>
              </RouterLink>
            </div>
            <div className="col-md-4">
              <RouterLink to="/virtual-tour/raja-ampat">
                <div className="card m-2 virtual-tour-card" w="18rem">
                  <Image h="400px" src={rajaAmpat} objectFit="cover" />
                  <div className="card-body">
                    <h2 className="card-title text-center font-weight-bold">
                      Raja Ampat
                    </h2>
                  </div>
                </div>
              </RouterLink>
            </div>
            <div className="col-md-4">
              <RouterLink to="/virtual-tour/pantai-pangandaran">
                <div className="card m-2 virtual-tour-card" w="18rem">
                  <Image h="400px" src={pantaiPangandaran} objectFit="cover" />
                  <div className="card-body">
                    <h2 className="card-title text-center font-weight-bold">
                      Pantai Pangandaran
                    </h2>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default virtualTour;
