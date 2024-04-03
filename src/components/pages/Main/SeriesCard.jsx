import React from "react";
import { Card } from "react-bootstrap";

const SeriesCard = (props) => {
  const addSeriesToWatchListFromRatingPage = () => {
    console.log("work");
  };
  return (
    <Card>
      <Card.Img variant="top" src={props.poster} />
      <Card.Header>
        <div className="card_header">
          <div className="imdb_info">
            <div className="imdb_logo">
              <img src="/img/icons/imdb_small.png" alt="imdb logo"></img>{" "}
            </div>
            <div className="imdbRating">{props.imdbRating}</div>
          </div>
          <div className="button_addToWL">
            <button
              className="button_toWatchList"
              type="button"
              onClick={() => addSeriesToWatchListFromRatingPage()}
            >
              to WatchList
            </button>
          </div>
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
