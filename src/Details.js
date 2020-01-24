import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class Details extends Component {

  constructor() {
    super();
    this.state = {
    welcomemessage: 'Welcome to Vickys App!! '
    };
  }
  
  return () {
    return (
       <>
    <h1>{this.state.welcomemessage}</h1>
    <Link to='/'><h1>Home</h1></Link>
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

*/






















/*import React from 'react';

export default function Details() {
  return (
    <div><h2>Welcome to my app</h2></div>
  );
}*/