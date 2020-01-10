import React from 'react';
import './App.css';
import film1 from './molly.jpg';

function App() {
  return (
  <div className="App">
    <h1>KodFlix</h1>
    <img src={film1}/>
    <div className="container">
      <nav className='nav'>Navbar</nav>
      <aside>Menu</aside>
      <article>Article</article>



      <footer id="footer">
        <div className="row">
          <ul className="footer-nav">
            <li><a href="#">Menu</a></li>
            <li>Adress: 199 Eade Road</li>
            <li>Email: vasiliki.robles@gmail.com</li>
            <li>Contact: +44 743 857 7974</li>
          </ul>
        </div>

      <div className="copywrite">
        <p>Copywriting 2020. KodFlix all rights reserved.</p>

      </div>

      </footer>
    </div>

    </div>
  );

  }



export default App;

