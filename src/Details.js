import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getMovieTitle from './gallery-get';



export default class Details extends React.Component {

      constructor() {
        super();
        this.state ={
            welcomeMessage: 'Welcome to Vickys app!'
        };
      }

      componentDidMount() {
        setTimeout (()=> {

        }, 3000);
      }

      render() {
        return (
          <>
          <h1>{this.state.welcomeMessage}</h1>
          <Link to='/'><h2>Home</h2></Link>
         </>
        );
      
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























