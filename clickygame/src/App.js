import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardManager from './components/CardManager';

class App extends Component {
  render() {
    return (
      <div className="App">
       <CardManager />
      </div>
    );
  }
}

export default App;
