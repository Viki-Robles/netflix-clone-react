import React from 'react';
import MovieTitle from './MovieTitle';
import getMovieTitle from './gallery-get';


export default function Gallery() {
  return (
    <div>
      <div className="container cover-image">
        {


          getMovieTitle().map(movieTitle => (
            <MovieTitle key={movieTitle.id}
              id={movieTitle.id}
              name={movieTitle.name}
              picture={movieTitle.picture} />
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









  <div className="container">

  <Example/>
  </div>      
  </div>

  function Example(props) {
    return(
      <div className="title">{props.title}</div>
            <div className="picture">{props.picture}</div>
    );
  }

  <Example id="title" title="Red Room" picture="picture1"/>
  <Example id="title" title="Red Room" picture="picture1"/>
  <Example id="title" title="Red Room" picture="picture1"/>
  <Example id="title" title="Red Room" picture="picture1"/>

  function Gallery () {
    return (
  <Example id="Red Room" title="Red Room" picture="picture1"/>
  <Example id="title" title="Red Room" picture="picture1"/>
  <Example id="title" title="Red Room" picture="picture1"/>
  <Example id="title" title="Red Room" picture="picture1"/>
    );
  }

  function gallery-pic () {
    return ([
      {id=: "Red Room" title:"Red Room" picture:"picture1"}
    ]
    );
  }

  gallery-pic.map(movies => 
    <Example key={movies.id}
    id={movies.id}
    title={movies.title}
    picture={movies.picture}
    )
*/
