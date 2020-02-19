import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import Details from './Details/Details.js';
import molly from './mollygame.jpg';
import NotFound from './NotFound';
import Menu from './Menu/Menu';
import './Menu/Menu.css';
import Play from './Play/Play';
import Footer from './Footer/footer';
import Contact from './Contact/contact';
import { withRouter } from "react-router-dom"
import ScrollToTop from './scrollmenu/scrollmenu';

class App extends Component {
  render() {
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
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/:movietitleId' component={Details} />
                <Route exact path='/:showId/play' component={Play} />
              </Switch>
              <div>
              <Footer/>
              </div>
            </div>
          </div>

        </div>
      </Router>



    );
  }

}
export default App;

/**export default withRouter(ScrollToTop)
 * import { withRouter } from "react-router-dom"
 *         <ScrollToTop />
;
;
 */

/*
<img src={logo} className="App-logo" alt="logo"/>
          <div className="background-image">
        <img src={molly} className="App-logo" alt="logo"/>
 */




