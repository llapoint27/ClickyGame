import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardManager from './components/CardManager';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div>
          <Nav />
        </div>
        <div>
          <CardManager />
        </div>
        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
