import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Welcome to Vickys App!! '
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
       welcomeMessage: 'Coming soon!'

      });
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