import React from 'react';
import MovieTitle from './MovieTitle';
export default function Gallery() {
  return (
    <div>
      <div className="container">

        <MovieTitle id="blackMirror" name="Black Mirror" picture="box box1" />
        <MovieTitle id="suits" name="Suits" picture="box box2" />
        <MovieTitle id="theWitcher" name="The Witcher" picture="box box3" />

      </div>

      <div className="container">

        <MovieTitle id="bleach" name="Bleach" picture="box box4" />
        <MovieTitle id="lucifer" name="Lucifer" picture="box box5" />
        <MovieTitle id="fairytail" name="Fairytail" picture="box box6" />
      </div>
    </div>
  );
}