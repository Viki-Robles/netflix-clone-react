import React from 'react';
import MovieTitle from './MovieTitle';
import getMovieTitle from './gallery-get';
import Footer from './Footer/footer';

export default function Gallery(props) {
  return (
    <div className={props.match.params !== '/:details' ? "background-image": "empty"}>
      <div className="container cover-image">
        {


          getMovieTitle().map(movieTitle => (
            <MovieTitle key={movieTitle.id}
              id={movieTitle.id}
              name={movieTitle.name}
              logo={movieTitle.logo} 
              videoId={movieTitle.videoId}
              cover={movieTitle.cover}/>
          ))
        }
      </div>
      <br/>
        

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
