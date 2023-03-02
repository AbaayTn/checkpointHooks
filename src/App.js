import React, { useRef, useState } from 'react'
import './App.css';
import Movielist from './movielist';
import Description from './Description';
import { Route, Routes } from 'react-router-dom';
function App() {

  const [movies,setMovie]=useState([
    {
      Title:'Star Wars',
      Rating:9,
      Poster:'https://lumiere-a.akamaihd.net/v1/images/mando-key-art-b-hero-mobile_da6b1047.jpeg?region=0,0,1024,626&width=960',
      desc:"123456789",
      Trailer:"https://youtu.be/sGbxmsDFVnE",
    },
    {
      Title:'Avatar',
      Rating:8,
      Poster:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/360E18CC49CEA00B464C19802C5BA34D6F748F853E1EBDF97F1EE2F39CBB39FE/scale?width=1200&aspectRatio=1.78&format=jpeg',
      desc:"987654321",
      Trailer:"https://youtu.be/d9MyW72ELq0",
    }
  ])

  const p=useRef()
  const p1=useRef()
  const p2=useRef()

  const add =()=>{
    setMovie([...movies,{
        Title:p.current.value,
        Rating:p1.current.value,
        Poster:p2.current.value,
    }])
}

  return (
    <div className="App">
      <input type={"text"} ref={p} placeholder="Movie title" />
      <input type={"text"} ref={p1} placeholder="Movie rating" />
      <input type={"text"} ref={p2} placeholder="Movie src" />
      <button onClick={add}>Add movie</button>
      <Routes>
      <Route path={"/"} element={<Movielist movies={movies}/>}></Route> 
      
        <Route path={"/:id"} element={<Description movies={movies}></Description>}></Route>
      </Routes>
    </div>
  );
}

export default App;
