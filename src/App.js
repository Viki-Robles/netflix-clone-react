import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';

import molly from '/MollyLogo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={molly} alt='molly logo'/>

      <Gallery/>

      </div>
    );
  }

}


export default App;


      







