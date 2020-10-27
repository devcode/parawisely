// Importing Stylesheets
import './stylesheets/html.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Library
import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './store';

// Importing Pages
import Landing from './pages/Landing';
import Kontak from './pages/Kontak';
import Tentang from './pages/Tentang';
import Eksplor from './pages/Eksplor';
import EksplorCategory from './pages/EksplorCategory';
import WisataDaerah from './pages/WisataDaerah';
import Map from './pages/Map';
import Mapgl from './components/ui/Mapgl';
import virtualTour from './pages/virtualTour';
// import PlaceDetail from './pages/PlaceDetail';
import candiBorobudur from './pages/candiBorobudur';
import danauToba from './pages/danauToba';
import keratonYogyakarta from './pages/keratonYogyakarta';
import labuanBajo from './pages/labuanBajo';
import rajaAmpat from './pages/rajaAmpat';
import pantaiPangandaran from './pages/pantaiPangandaran';
import DetailWisata from './pages/DetailWisata';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Router>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/map-test" component={Mapgl} />

            <Route path="/place/:slug" component={DetailWisata} />

            <Route path="/eksplorasi/:type" component={EksplorCategory} />
            <Route path="/eksplorasi" component={Eksplor} />
            <Route path="/detail-wisata" component={DetailWisata} />

            <Route path="/wisata-daerah" component={WisataDaerah} />
            <Route path="/peta-wisata" component={Map} />
            <Route
              path="/virtual-tour/candi-borobudur"
              component={candiBorobudur}
            />
            <Route path="/virtual-tour/danau-toba" component={danauToba} />
            <Route
              path="/virtual-tour/keraton-yogyakarta"
              component={keratonYogyakarta}
            />
            <Route path="/virtual-tour/labuan-bajo" component={labuanBajo} />
            <Route path="/virtual-tour/raja-ampat" component={rajaAmpat} />
            <Route
              path="/virtual-tour/pantai-pangandaran"
              component={pantaiPangandaran}
            />
            <Route path="/virtual-tour" component={virtualTour} />
            <Route path="/mitra-pariwisata" component={Eksplor} />
            <Route path="/tentang" component={Tentang} />
            <Route path="/kontak" component={Kontak} />
            <Route path="/rekomendasi" component={Eksplor} />
          </Switch>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
