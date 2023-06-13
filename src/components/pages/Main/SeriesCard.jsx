import React from "react";
import { Card } from "react-bootstrap";

const SeriesCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.poster} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.plot}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SeriesCard;
