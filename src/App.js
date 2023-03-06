import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import Movielist from './movielist';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component'; 
import Rating from '@mui/material/Rating';


=======
import Description from './Description';
import { Route, Routes } from 'react-router-dom';
>>>>>>> d30dfdd9cecf46f5703eef3847c9d7d747fb5a2d
function App() {

  const [movies,setMovie]=useState([
    {
      Title:'Star Wars',
<<<<<<< HEAD
      Rating:3,
      Trailer:'https://youtu.be/sGbxmsDFVnE',
      Description:'The Star Wars franchise involves multiple live-action and animated films. The film series started with a trilogy set in medias res that was later expanded to a trilogy of trilogies, known as the "Skywalker Saga".',
      Poster:'https://lumiere-a.akamaihd.net/v1/images/mando-key-art-b-hero-mobile_da6b1047.jpeg?region=0,0,1024,626&width=960'
    },
    {
      Title:'Avatar',
      Rating:4,
      Trailer:'https://youtu.be/d9MyW72ELq0',
      Description:'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      Poster:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/360E18CC49CEA00B464C19802C5BA34D6F748F853E1EBDF97F1EE2F39CBB39FE/scale?width=1200&aspectRatio=1.78&format=jpeg'
=======
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
>>>>>>> d30dfdd9cecf46f5703eef3847c9d7d747fb5a2d
    }
  ])



  const p=useRef()
  const p1=useRef()
  const p2=useRef()
  const p3=useRef()
  const p4=useRef()

  

        const add =()=>{
        setMovie([...movies,{
        Title:p.current.value,
        Rating:p1.current.value,
        Poster:p2.current.value,
        Trailer:p3.current.value,
        Description:p4.current.value,
    }])
}
    const [filtredlist,setFilter]=useState(movies)

    useEffect(()=>{
      setFilter(movies)
    },[movies])

    const p5=useRef()
    
    const filtrer=()=>{
      setFilter(movies.filter(e=>e.Title.toLowerCase().includes(p5.current.value.toLowerCase())))
    }
    
    const [rating,setRate]=useState()
    const onStarClick=(x)=>{
      setFilter(movies.filter(e=>e.Rating>=x))
      console.log(x)
    }
    
  return (
    <div className="App">
      <input type={"text"} ref={p2} placeholder="Image src" />
      <input type={"text"} ref={p} placeholder="Movie title" />
      <input type={"text"} ref={p4} placeholder="Movie Description" />
      <input type={"text"} ref={p1} placeholder="Movie rating" />
      <input type={"text"} ref={p3} placeholder="Trailer src" />
      <button onClick={add}>Add movie</button>
<<<<<<< HEAD
      
      <input type={'search'} placeholder='search...' ref={p5} onChange={filtrer}></input>
      <StarRatingComponent
    name='rate' /* name of the radio input, it is required */
    value={Rating} /* number of selected icon (`0` - none, `1` - first) */
    starCount={5} /* number of icons in rating, default `5` */
    onStarClick={onStarClick}
    
/>
      <div className='movie'>
      <Movielist movies={filtredlist} />
      </div>
=======
      <Routes>
      <Route path={"/"} element={<Movielist movies={movies}/>}></Route> 
      
        <Route path={"/:id"} element={<Description movies={movies}></Description>}></Route>
      </Routes>
>>>>>>> d30dfdd9cecf46f5703eef3847c9d7d747fb5a2d
    </div>
  );
}

export default App;
