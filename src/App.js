import React from 'react';
import './App.css';
import film1 from './molly2.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>KodFlix</h1>
      <img src={film1}/>

      </div>
      <nav>Navbar</nav>
      <aside>Menu</aside>
      <article>Article</article>
      <footer>Footer</footer>
    
    </div>
  );

  }



export default App;

