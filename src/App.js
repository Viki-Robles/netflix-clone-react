import React from 'react';
import './App.css';
import molly from './mollysgame.jpg';

function App() {
  return (
    <div className="App">

      <body>
        <h1>KodFlix</h1>


        <nav>Nav bar</nav>
        <div className="container">
          <aside>Menu</aside>
          <article>Article</article>
        </div>

        <img src={molly} className="header-image" alt='molly logo' />

        <div className="container">
          <Movietitle name="Black Mirror" picture="box box1" />
          <Movietitle name="Suits" picture="box box2" />
          <Movietitle name="The Witcher" picture="box box3" />
        </div>

        <div className="container">
          <Movietitle name="Bleach" picture="" />
          <Movietitle name="Lucifer" picture="" />
          <Movietitle name="Fairytail" picture="" />
        </div>

        <footer>Footer</footer>
      </body>
    </div>


  );

}

function Movietitle(props) {
  return (
    <div className={props.picture}>
      <div className="overlay">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}






export default App;

