import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import ValidationForm from './ValidationForm';


export default function SignUp() {
    return (
        <>
            <div className="signUpForm">
                <div className="Menu-link contact">
                    <h3>Sign Up</h3>
                    <Link to='/signup'>  
                        <ValidationForm />
                    </Link>
                    <br />
                </div>
               
                <Link to='/'><button className="buttonHome">Home</button></Link>
               
            </div>
        </>
    );
}




