import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const name:string = "mutant";
  const age:number = 21
  const inLove:boolean = true

  const getName = (name:string):number => {
    if(name === "mutant"){
      return 21
    }else{
      return 0
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="btn" >
          {name}<br />
          {age}<br />
          {inLove}
        </div>
      </header>
    </div>
  );
}

export default App;
