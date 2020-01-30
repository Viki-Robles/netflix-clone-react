import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovieTitle from './gallery-get';



export default class Details extends React.Component {

  constructor() {
    super();
    
    this.state = {
      movietitle: {}
    };
  }

  componentDidMount() {
    let movietitleId =this.props.match.params.movietitleId;
    let movietitle = getMovieTitle().find (function (movietitle) {
      return movietitle.id === movietitleId;
    });
    
    
      this.setState({
        movietitle: movietitle
      });
   
  }

  render() {
    if(this.state.movietitle === undefined) {
      return <Redirect to='/not-found'/>;

    } else {
      
    return (
      <>
        <h1>{this.state.movietitle.name}</h1>
        <h2>{this.state.movietitle.synopsis}</h2>
        <Link to='/'><h2>Home</h2></Link>
      </>
    );

  }
}

}


/*



export default function Details() {
  return (
    <>
    <h1>Welcome to Vicky's app!</h1>
    <Link to='/'><h2>Home</h2></Link>
   </>
  );
}




*/























