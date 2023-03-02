import React from 'react'
import { NavLink } from 'react-router-dom'


const Movielist = (props) => {
    return (
        <>
            {props.movies.map((movie,index)=>
            <div>
                <NavLink to={index.toString()}>
                <h1>{movie.Title}</h1>
                <p>{movie.Rating}</p>
                <img src={movie.Poster} alt='movie'></img>
                
                </NavLink>
            </div>)}
        </>
    )
}

export default Movielist