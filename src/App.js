import React from 'react';
import './App.css';
import molly from './molly.jpg';

function App() {
  return (
  <div className="App">

<body>
  <h1>KodFlix</h1>
<img src={molly}/>

<div className="row">
<div className="menu">
   <ul className="menubar">
     <li><a>Home</a></li>
     <li><a>Series</a></li>
     <li><a>Films</a></li>
     <li><a>Articles</a></li>
     </ul>
</div>
</div>



<div className="container">
  <div className="box">
    <div className="blackmirror">
    <h2>Black Mirror</h2></div>
    </div>


  <div className="box box2"><h2>Suits</h2></div>
  <div className="box box3"><h2>Witcher</h2></div>
</div>

<div className="container">
  <div className="box box4"><h2>Notebook</h2></div>
  <div className="box box5"><h2>Shadow Hunters</h2></div>
  <div className="box box6"><h2>Money Heist</h2></div>
</div>






<section>
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
      </section>
      </body>
    </div>
 
   
  );

  }



export default App;

