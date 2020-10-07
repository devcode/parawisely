import './stylesheets/html.css';

import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './theme';

import Pemetaan from './components/ui/Pemetaan';
import Landing from './pages/Landing';
import Kontak from './pages/Kontak';
import Tentang from './pages/Tentang';
import Eksplor from './pages/Eksplor';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/pemetaan" component={Pemetaan} />
          <Route path="/kontak" component={Kontak} />
          <Route path="/tentang" component={Tentang} />
          <Route path="/eksplor" component={Eksplor} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
