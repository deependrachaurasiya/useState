import React, { useState } from 'react';
import './App.css';

function App() {
 const[MyName,  SetMyName]=useState('DEEPENDRA CHAURASIYA');
 const ChangeName = () =>{
  let val=MyName;
  if(val==='DEEPENDRA CHAURASIYA')
   SetMyName("akhil")
  else{
    SetMyName("DEEPENDRA CHAURASIYA")
  }
 }
 console.log(MyName);
  return (
    <div>
      <h1>{MyName}</h1>
      <button className="btn"onClick={ChangeName} >click me </button>
    </div>
  );
}

export default App;
