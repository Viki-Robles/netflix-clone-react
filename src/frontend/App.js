import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery';
import Details from './Details/Details.js';
import NotFound from './NotFound';
import './Menu/Menu.css';
import Play from './Play/Play';
import Footer from './Footer/footer';
import ScrollToTop from './scrollmenu/scrollmenu';
import SignUp from './signup/signup';
import ToolBar from '../ToolBar/ToolBar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

class App extends Component {

  state = {
    sideDrawerOpen :false

  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});

  }


  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    
    return (
      <div style={{height: "100%"}}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <ToolBar drawerClickHandler = {this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
            <h1>KodFlix</h1>
          
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
            <Footer/>
            
          </div>
        </div>
      </Router>
      </div>

    );

  }

}

export default App;

/**export default withRouter(ScrollToTop)



conditional rendering using fasle or true statement for Footer
      {props + '/contact' ? false : <Footer/>}
      
{props + '/' ? <Footer/> : false }   
 
<div className="main" id="section2">
              Contact
            </div>
      */




