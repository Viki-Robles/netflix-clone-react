import React from 'react';
import './App.css';
import molly from './molly.jpg';

function App() {
  return (
  <div className="App">


<h1>KodFlix</h1>

<div className="flex-container">
   <div className="navbar">Menu</div>
   <div className="Menu"></div>
   <div className="aside"></div>
   <div className="footer"></div>
  

</div>


<img src={molly} alt='molly logo'/>


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

