import './stylesheets/html.css';

import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './theme';

import Landing from './pages/Landing';
import Kontak from './pages/Kontak';
import Tentang from './pages/Tentang';
import Eksplor from './pages/Eksplor';
import EksplorCategory from './pages/EksplorCategory';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/eksplor/:category" component={EksplorCategory} />
          <Route path="/kontak" component={Kontak} />
          <Route path="/tentang" component={Tentang} />
          <Route path="/eksplor" component={Eksplor} />
          <Route path="/" component={Landing} exact />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
