import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import molly from './MollyLogo.jpg';
import MovieTitle from './MovieTitle';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path='/' component={MovieTitle}/>
        <Route path='/details' component={Details}/>
        <h1>KodFlix</h1>
        <img src={molly} alt='molly logo' />
        <Gallery/>
      </div>
</Router>
      
     
    );
  }

}

export default App;

function Details() {
  return (
   <div><h1>Hello, this will be the details page for each Movie & TV show :)</h1></div>
  );
}



 









