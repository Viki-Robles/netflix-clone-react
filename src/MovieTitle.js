import React from 'react';
import { Link } from 'react-router-dom';


export default function MovieTitle(props) {
  return (
    <>
      <Link to={`/ ${props.id} `} className="box">
        <div className={props.picture}>
          <div className="overlay">
            <h2>{props.name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}



