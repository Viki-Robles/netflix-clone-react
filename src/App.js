import React from 'react';
import './App.css';
import molly from './mollysgame.jpg';

function App() {
  return (
    <div className="App">


      <h1>KodFlix</h1>

      <nav>Nav bar</nav>
      <div className="container">
        <aside>Menu</aside>
        <article>Article</article>
      </div>

      <img src={molly} className="header-image" alt='molly logo' />

      <div className="container">

      <MovieTitle name="Black Mirror" picture="box box1"/>
      <MovieTitle name="Suits" picture="box box2"/>
      <MovieTitle name="The Witcher" picture="box box3"/>

      <div className="container">

      <MovieTitle name="Bleach" picture="box box4"/>
      <MovieTitle name="Lucifer" picture="box box5"/>
      <MovieTitle name="Fairytail" picture="box box6"/>
      </div>


      

     




    </div>

    </div>

   

  );

}

function MovieTitle (props) {
  <div className={props.picture}>
          <div className="overlay">
            <h2>{props.name}</h2>
          </div>
        </div>

}







export default App;

