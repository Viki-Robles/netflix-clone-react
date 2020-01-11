import React from 'react';
import './App.css';
import molly from './molly.jpg';

function App() {
  return (
  <div className="App">


<h1>KodFlix</h1>

<div className="menu">
   <ul className="menubar">
     <li><a>Home</a></li>
     <li><a>Series</a></li>
     <li><a>Films</a></li>
     <li><a>Articles</a></li>
     </ul>
</div>


<img src={molly} />


<div className="container">
  <div className="box box1"><h2>Black Mirror</h2></div>
  <div className="box box2"><h2>Suits</h2></div>
  <div className="box box3"><h2>Witcher</h2></div>
  </div>

<div className="container">
  <div className="box box4"><h2>Bleach</h2></div>
  <div className="box box5"><h2>Lucifer</h2></div>
  <div className="box box6"><h2>Fairytail</h2></div>
</div>


     
     
     
</div>
 
   
  );

  }



export default App;

