import React from 'react'
<<<<<<< HEAD
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BasicRating from './Rating';
=======
import { NavLink } from 'react-router-dom'

>>>>>>> d30dfdd9cecf46f5703eef3847c9d7d747fb5a2d

const Movielist = (props) => {
    return (
        <>
<<<<<<< HEAD
            {props.movies.map(
        function KitchenSinkExample(movie,index) {
            return (
                
                <Card style={{ width: '18rem' ,marginTop:'2rem',marginLeft:'2rem'}}>
                <Card.Img variant="top" src={movie.Poster} style={{height:'15rem'}}/>
                <Card.Body style={{height:'15rem'}}>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                    {movie.Description}
                    </Card.Text>
                </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                
                    <BasicRating Rating={movie.Rating}></BasicRating>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={movie.Trailer}>Movie Trailer</Card.Link>
                </Card.Body>
                </Card>
                
            );
    })}
=======
            {props.movies.map((movie,index)=>
            <div>
                <NavLink to={index.toString()}>
                <h1>{movie.Title}</h1>
                <p>{movie.Rating}</p>
                <img src={movie.Poster} alt='movie'></img>
                
                </NavLink>
            </div>)}
>>>>>>> d30dfdd9cecf46f5703eef3847c9d7d747fb5a2d
        </>
    )}

export default Movielist