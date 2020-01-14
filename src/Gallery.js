import React from 'react';

export default function Gallery() {
    return (
      <div>
        <div className="container">
  
          <Movietitle name="Black Mirror" picture="box box1" />
          <Movietitle name="Suits" picture="box box2" />
          <Movietitle name="The Witcher" picture="box box3" />
  
        </div>
  
        <div className="container">
  
          <Movietitle name="Bleach" picture="box box4"/>
          <Movietitle name="Lucifer" picture="box box5" />
          <Movietitle name="Fairytail" picture="box box6" />
        </div>
      </div>
    );
  }