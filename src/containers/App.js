import React from 'react';
import GlobalStyle from '../globalStyles.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Inicio from '../components/Inicio.jsx'

// import ScrollToTop from '../components/ScrollToTop'

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (

    <Router>
      <GlobalStyle />
      <Navbar />
      <Inicio />
      <Footer />
    </Router >

  );
};

export default App;
