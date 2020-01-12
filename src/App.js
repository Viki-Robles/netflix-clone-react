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



<img src={molly} className="header-image" alt='molly logo'/>


<div className="container">
  <div className="box box1">
    <div className="overlay">
      <h2>Black Mirror</h2>
      </div>
    </div>
<div className="box box2">
    <div className="overlay">
    <h2>Suits</h2>
    </div>
    </div>
  <div className="box box3">
    <div className="overlay">
      <h2>Witcher</h2>
      </div>
    </div>
  </div>

<div className="container">
  <div className="box box4">
    <div className="overlay">
      <h2>Bleach</h2>
    </div>
    </div>

  <div className="box box5">
    <div className="overlay">
      <h2>Lucifer</h2>
      </div>
    </div>

  <div className="box box6">
    <div className="overlay">
    <h2>Fairytail</h2>
    </div>
    </div>
</div>


<footer>Footer</footer>  
</body>  
     
</div>
 
   
  );

  }



export default App;

