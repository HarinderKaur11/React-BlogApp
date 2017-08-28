import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div >
      <Navbar />
      <Header />
      <Container />
      <hr />
      <Footer />
      </div>
    );
  }
}

export default App;
