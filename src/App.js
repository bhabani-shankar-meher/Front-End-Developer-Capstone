import React from 'react';

import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Menu from './components/Menu.js';
import Footer from "./components/Footer.js";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

export default App;
