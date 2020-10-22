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
import candiBorobudur from './pages/candiBorobudur';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/eksplorasi" component={Eksplor} />
          <Route path="/eksplorasi/:category" component={EksplorCategory} />
          <Route path="/wisata-daerah" component={WisataDaerah} />
          <Route path="/peta-wisata" component={Map} />
          <Route path="/virtual-tour" component={virtualTour} />
          <Route
            path="/virtual-tour/candi-borobudur"
            component={candiBorobudur}
          />
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
