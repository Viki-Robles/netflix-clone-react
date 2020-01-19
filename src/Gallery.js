import React from 'react';
import MovieTitle from './MovieTitle';
import { render } from '@testing-library/react';
import getMovieTitle from './gallery-get';

export default function Gallery() {
  return (
    <div>
      <div className="container">
        {
          getMovieTitle().map(MovieTitle => (
            <MovieTitle key={MovieTitle.id}
              id={MovieTitle.id}
              name={MovieTitle.name}
              picture={MovieTitle.picture} />
          ))
        }
</div>
      </div>
   
  );
}




/*
<MovieTitle id="blackMirror" name="Black Mirror" picture="box box1" />
        <MovieTitle id="suits" name="Suits" picture="box box2" />
        <MovieTitle id="theWitcher" name="The Witcher" picture="box box3" />
        <MovieTitle id="bleach" name="Bleach" picture="box box4" />
        <MovieTitle id="lacasadepapel" name="La Casa De Papel" picture="box box5" />
        <MovieTitle id="fairytail" name="Fairytail" picture="box box6" />

*/

