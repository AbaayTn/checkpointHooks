import React from 'react'

const Movielist = (props) => {
    return (
        <>
            {props.movies.map((movie,index)=>
            <div>
                <h1>{movie.Title}</h1>
                <p>{movie.Rating}</p>
                <img src={movie.Poster} alt='movie'></img>
            </div>)}
        </>
    )
}

export default Movielist