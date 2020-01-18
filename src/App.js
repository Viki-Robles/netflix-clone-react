import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import molly from './MollyLogo.jpg';
import Gallery from './Gallery';
import Details from './Details';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>KodFlix</h1>
          <Route exact path='/' component={Gallery}/>
          <Route exact path='/:details' component={Details}/>
          
        </div>
      </Router>


    );
  }

}

export default App;


/*

<img src={molly} alt='molly logo' />*/



    








