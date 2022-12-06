import * as React from 'react';

interface mutantProps{
    name:string,
    age:number,
    isLove:boolean
    getName: (name:string) => number
}

export const Mutant = (props:mutantProps) => {
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  );
}
