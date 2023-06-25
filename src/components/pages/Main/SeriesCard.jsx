import React from "react";
import { Card } from "react-bootstrap";

const SeriesCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.poster} />
      <Card.Header>
        <div className="imdb_logo">
          <img src="/img/icons/imdb_small.png" alt="imdb logo"></img>{" "}
          {props.imdbRating}
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.plot}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SeriesCard;
