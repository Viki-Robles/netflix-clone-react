import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import Details from './Details';
import molly from './mollygame';




class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
        <h1>KodFlix</h1>
          <div className="background-image">
          <Route exact path='/' component={Gallery}/>
          <Route exact path='/:details' component={Details}/>
          </div>
          </div>
         


      </Router>


    );
  }

}

export default App;













