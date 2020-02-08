import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovieTitle from '../gallery-get';
import './Details.css';
import Play from '../Play/Play';




export default class Details extends React.Component {

  constructor() {
    super();

    this.state = {
      movietitle: {}
    };
  }

  componentDidMount() {
    let movietitleId = this.props.match.params.movietitleId;
    let movietitle = getMovieTitle().find(function (movietitle) {
      return movietitle.id === movietitleId;
    });


    this.setState({
      movietitle: movietitle
    });

  }

  render() {
    if (this.state.movietitle === undefined) {
      return <Redirect to='/not-found' />;

    } else {
      return (
        <div className="Details">
          <h1>{this.state.movietitle.name}</h1>
          <div className="content">
            <div className="text">
              <div>{this.state.movietitle.details}</div>
            </div>
            <div className="content-logo">
              <img className="image"
                src={this.state.movietitle.logo}
                alt={this.state.movietitle.name} />
            </div>
            <div className="play">
                <Play/>
              </div>
            <Link to='/'><button className="button">Home</button></Link>
          </div>
        </div>
      );

    }
  }

}


























