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
      <div className="item item1">
        <div className="blackmirror">Black Mirror
        <img/>
        </div> 
        </div>
  </div>


<div className="box">
     <div className="item item2">
     <div className="suits">Suits
     <img/>
     </div>
     </div>
</div>
      



      <div className="item item3">Witcher</div>
      <div className="item item4">Notebook</div>
      <div className="item item5"></div>
      <div className="item item6"></div>


</div>






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
    
      </body>
    </div>
 
   
  );

  }



export default App;

