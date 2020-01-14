import React, { Component } from 'react';
import './App.css';
import molly from './MollyLogo.png';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieTitle from './MovieTitle';
import Gallery from './Gallery';

class App extends Component {
  render() {

    return (
      <div className="App">
        <img src={molly} alt='molly logo' />

        

      </div>
    );

  }
}

export default App;


/*
        <Gallery></Gallery>

*/






