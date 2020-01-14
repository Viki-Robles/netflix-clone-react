import React from 'react';

export default function Movietitle(props) {
  return (

    <div className={props.picture}>
      <div className="overlay">
        <h2>{props.name}</h2>
      </div>
    </div>

  );
}



