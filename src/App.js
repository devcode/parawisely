// Importing Stylesheets
import './stylesheets/html.css';

// Importing Library
import React, { useEffect } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './theme';

// Importing Pages
import Landing from './pages/Landing';
import Kontak from './pages/Kontak';
import Tentang from './pages/Tentang';
import Eksplor from './pages/Eksplor';
import EksplorCategory from './pages/EksplorCategory';
import WisataDaerah from './pages/WisataDaerah';
import Map from './pages/Map';
import virtualTour from './pages/virtualTour';
import PlaceDetail from './pages/PlaceDetail';
import candiBorobudur from './pages/candiBorobudur';
import danauToba from './pages/danauToba';
import detailWisata from './pages/detailWisata';

function App() {
  console.log(process.env);
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/" component={Landing} exact />

          <Route path="/eksplorasi/:type/:slug" component={PlaceDetail} />
          <Route path="/eksplorasi/:type" component={EksplorCategory} />
          <Route path="/eksplorasi" component={Eksplor} />
          <Route path="/detail-wisata" component={detailWisata} />

          <Route path="/wisata-daerah" component={WisataDaerah} />
          <Route path="/peta-wisata" component={Map} />
          <Route
            path="/virtual-tour/candi-borobudur"
            component={candiBorobudur}
          />
          <Route path="/virtual-tour/danau-toba" component={danauToba} />
          <Route path="/virtual-tour" component={virtualTour} />
          <Route path="/mitra-pariwisata" component={Eksplor} />
          <Route path="/tentang" component={Tentang} />
          <Route path="/kontak" component={Kontak} />
          <Route path="/rekomendasi" component={Eksplor} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
