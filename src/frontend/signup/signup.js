import React, { Component } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import ValidationForm from './ValidationForm';


export default function SignUp() {
    return (
        <>
            <div className="signUpForm">
                <div className="Menu-link contact">
                    <Link to='/signup'>
                        <h3>Sign Up</h3>
                        <ValidationForm />
                    </Link>
                    <br />
                </div>
                <div>
                    <Link to='/'><button className="buttonHome">Home</button></Link>
                </div>
            </div>
        </>
    );
}




