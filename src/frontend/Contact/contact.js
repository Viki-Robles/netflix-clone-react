import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';


export default function Contact() {
    return (
        <div className="Menu-link contact">
            <Link to='/contact'>
                <h1>Contact</h1>
            </Link>
        </div>
    );
}
   
                
