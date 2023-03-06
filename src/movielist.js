import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BasicRating from './Rating';

const Movielist = (props) => {
    return (
        <>
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
        </>
    )}

export default Movielist