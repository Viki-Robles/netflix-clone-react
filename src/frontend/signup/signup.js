import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';


export default function SignUp() {
    return (
        <div className="Menu-link contact">
            <Link to='/signup'>
                <h1>Sign Up</h1>
            </Link>
        </div>
    );
}
   
                
