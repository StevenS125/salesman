import React, { Component } from 'react';
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;
