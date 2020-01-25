import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import Details from './Details';
import molly from './mollygame.jpg';




class App extends Component {
  render() {
    return (

      <Router>

        <div className="App">
        <h1>KodFlix</h1>

          <div className="background-image">
            <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/:movietitleid' component={Details} />
            </Switch>
       
          </div>
        </div>



      </Router>


    );
  }

}

export default App;


/*        

<Route exact path='/not-found' component={NotFound}/>

 */




