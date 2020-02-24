import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import Details from './Details/Details.js';
import NotFound from './NotFound';
import Menu from './Menu/Menu';
import './Menu/Menu.css';
import Play from './Play/Play';
import Footer from './Footer/footer';
import ScrollToTop from './scrollmenu/scrollmenu';
import SignUp from './signup/signup';

class App extends Component {
  render(props) {
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Menu />
          <div className="header">
            <h1>KodFlix</h1>
          </div>
          <div>
            <div>
              <Switch>
                <Route exact path='/' component={Gallery} />
                <Route exact path='/not-found' component={NotFound} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/:movietitleId' component={Details} />
                <Route exact path='/:showId/play' component={Play} />
              </Switch>
            </div>
            <br />
            <div className="main" id="section2">
              Contact
            </div>
            {props + '/' ? <Footer/> : false }
          </div>
        </div>
      </Router>


    );

  }

}

export default App;

/**export default withRouter(ScrollToTop)



conditional rendering using fasle or true statement for Footer
      {props + '/contact' ? false : <Footer/>}
      
 if ('/' ? <Footer/> : false)     
      
      */




