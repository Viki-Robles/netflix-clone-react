import React from 'react';
import { Link } from 'react-router-dom';



export default function MovieTitle(props) {
  return (
    <>
      <div className="container">
            <Link to={`/${props.id}`}>
              <img src={props.logo} alt={`${props.name} logo`} className={`${props.box} box`}/>
              <div className="overlay">
                <h2>{props.name}</h2>
              </div>
            </Link>
          </div>
      
     
    </>
  );
}



