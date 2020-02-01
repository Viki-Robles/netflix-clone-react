import React from 'react';
import { Link } from 'react-router-dom';



export default function MovieTitle(props) {
  return (
            <Link to={'/'+ props.id} className="box">
              <img src={props.logo} alt={`${props.name} logo`} className="box-details"/>
              <div className="overlay">
                <h2>{props.name}</h2>
                </div>
             
            </Link>
          
     
    
  );
}


/*            <Link to={`/${props.id}`}>
 */
