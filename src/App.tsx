import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Mutant } from './Comonent/Mutant';

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
        <Mutant name={name} age={age} isLove={inLove} getName={getName} />
      </header>
    </div>
  );
}

export default App;
