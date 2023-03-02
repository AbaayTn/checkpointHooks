import React, { useState } from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'

function Description(props) {
    const id = useParams()
    const item=props.movies[id.id]
    return (
    <div>
        {item.desc}<br></br>
        <a href={item.Trailer}>Movie trailer</a>
        
        <NavLink to={'/'}><div>Go back to Home page</div></NavLink>

    </div>
    )
}

export default Description