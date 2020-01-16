import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import molly from './MollyLogo.jpg';
import MovieTitle from './MovieTitle';
import Details from './Details';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path='/' component={MovieTitle}/>
        <Route exact path='/details' component={Details}/>
        
     
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

*/
 









