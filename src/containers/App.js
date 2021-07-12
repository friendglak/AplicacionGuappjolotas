import React from 'react';
import GlobalStyle from '../globalStyles.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Inicio from '../components/Inicio.jsx'
import Login from '../components/Login.jsx';
import Details from '../components/Details.jsx';
import Carrito from '../components/Carrito.jsx';
//import ScrollToTop from '../components/ScrollToTop'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Waiting from '../components/Waiting.jsx';




const App = () => {
  return (

    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Waiting}/>
        <Route path="/inicio"  component={Inicio} />
        <Route path="/ingresar" component={Login} />
        <Route path="/detalles/:id" component={Details} />
        <Route path="/carrito" component={Carrito} />

      </Switch>
      <Footer />
    </Router >

  );
};

export default App;
