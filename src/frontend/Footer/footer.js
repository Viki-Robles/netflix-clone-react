import React from 'react';

export default function Footer() {
    return(
        
          /*<div className={props.match.params !== '/contact' ? ${Footer}: "empty"}>*/

             <footer className="footer" id="footer">
                  <ul>
                    <li>Address: 199 Eade Road, N4 1DN, London</li>
                    <li>Email: vasiliki.robles@gmail.com</li>
                  </ul>
                  <div className='copywrite'>
                    <p>Copywrite 2019. KodFlix all rights reserved.</p>
                  </div>  
                </footer>
      
    );
}