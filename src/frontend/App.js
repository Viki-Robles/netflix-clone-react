import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Gallery from "./Gallery";
import Details from "./Details/Details.js";
import NotFound from "./NotFound";
import "./Menu/Menu.css";
import Play from "./Play/Play";
import Footer from "./Footer/footer";
import ScrollToTop from "./scrollmenu/scrollmenu";
import SignUp from "./signup/signup";
import ToolBar from "../ToolBar/ToolBar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import { AnimatedSwitch } from "react-router-transition";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    fetch("api/movies")
      .then(res => res.json())
      .then(movies =>
        this.setState({ movies }, () => console.log("Movies fetched!", movies))
      );
  }
  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Router>
          <ScrollToTop />
          <AnimatedSwitch
            atEnter={{ opacity: 0.4 }}
            atLeave={{ opacity: 0.6 }}
            atActive= {{ opacity: 1 }}
            className="switch-wrapper"
          >
          <div className="App">
            <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <h1>KodFlix</h1>

            <div>
              <div>
                <Switch>
                  <Route exact path="/" component={Gallery} />
                  <Route exact path="/not-found" component={NotFound} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/:movietitleId" component={Details} />
                  <Route exact path="/:showId/play" component={Play} />
                </Switch>
              </div>
              <br />
              <div className="main" id="section2">
                Contact
              </div>
              <Footer />
            </div>
          </div>
          </AnimatedSwitch>
        </Router>
      </div>
    );
  }
}

export default App;
