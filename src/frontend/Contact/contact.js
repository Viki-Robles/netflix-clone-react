import React from 'react';
import './contact.css';
import { Link, Redirect } from 'react-router-dom';


export default function Contact() {
    return (
        <div>
            <Redirect to='/contact'>
                <h1>Contact</h1>
            </Redirect>
        </div>
    );
}
   
                
