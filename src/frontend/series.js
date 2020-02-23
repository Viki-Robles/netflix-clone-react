import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default function Series () {
    return (
        <div>
            <title>Series</title>
            <Link to='/series'></Link>
            <Link to='/'><button className="buttonHome">Home</button></Link>

        </div>
    );
}