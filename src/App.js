import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import molly from './MollyLogo.jpg';
import Details from './Details';
import Gallery from './Gallery';





class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>KodFlix</h1>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/details' component={Details} />
        </div>
      </Router>


    );
  }

}

export default App;


/*
Background image
        <h1>KodFlix</h1>
        <img src={molly} alt='molly logo' />
        <Route exact path='/' component={Gallery}/>
        <Route exact path='/details' component={Details}/>



*/










