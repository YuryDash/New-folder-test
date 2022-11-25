import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type PropsType = {
userId: number
    id: number
    title: string
    body: string
}

function App(peops: PropsType) {

    const [state, setState] = useState<PropsType[]>([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }, [] )

  return (
    <div className="App">

        <button onClick={ ()=>{setState([])} }>x</button>
        <button onClick={ ()=>{setState([])} }>Show</button>

        <ul>

            {state.map( (el)=>{
                return(
                    <li>
                        <span>{el.id}</span>
                        <span>{el.title}</span>
                        <span>{el.userId}</span>
                    </li>
                )
            } )}

        </ul>

    </div>
  );
}

export default App;
