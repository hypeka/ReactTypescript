import {ChangeEvent, FC, useState} from 'react';

interface mutantProps{
    name:string,
    age:number,
    isLove:boolean
    getName: (name:string) => number
}

export const Mutant:FC<mutantProps> = ({name,age,isLove,getName}) => {

    const [mutanto ,setMutanto] = useState<string | null>(" ");

    const eventhandler = (event:ChangeEvent<HTMLInputElement>) => {
        setMutanto(event.target.value)
    }

  return (
    <div>
      {name}
      {age}
      <input type="text" placeholder='happy mutanto' onChange={eventhandler} />
      {mutanto}
    </div>
  );
}
