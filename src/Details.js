import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovieTitle from './gallery-get';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      movietitle: {}
    };
  }


  componentDidMount() {

    let movietitleid = this.props.match.params.movietitleid;
    let movietitle = getMovieTitle().find((movietitle) => {
        return movietitle.id === movietitleid;
    });
    
      this.setState({
       movietitle: movietitle

      });
   
  }

  render() {
    if(this.state.movietitle === undefined) {
        return <Redirect to='/not-found'></Redirect>
    } else {

    return (
      <>
        <h1>{this.state.movietitle.name}</h1>
        <Link to='/'><h2>Home</h2></Link>
      </>
    );
  }
}


/*

STATE COMPONENT

export default function Details() {
  return (
    <>
    <h1>Welcome to Vicky's app!</h1>
    <Link to='/'><h1>Home</h1></Link>
   </>
  );
}

import React from 'react';

export default function Details() {
  return (
    <div><h2>Welcome to my app</h2></div>
  );
}
     

*/























