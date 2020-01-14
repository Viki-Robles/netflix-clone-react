import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';

import molly from './MollyLogo.jpg';


class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
        <h1>KodFlix</h1>
        <img src={molly} alt='molly logo' />
          <Route exact path='/' component={Gallery}/>
          <Route path='/details' component={Details}/>

         

        </div>
      </Router>
    );
  }

}

function Details() {
  return (
   <div><h1>Hello, this will be the details page for each Movie & TV show :)</h1></div>
  );
}

export default App;










