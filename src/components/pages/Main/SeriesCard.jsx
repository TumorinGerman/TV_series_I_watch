import { React, useContext } from "react";
import { Card } from "react-bootstrap";

import addSeriesToWatchlist from ".//../../../services/firebase/utils/addSeriesToWatchlist";
import { fetchAllSeriesInformation } from "../../../common/utils/fetchData";
import UserStateContext from "../../../context";

const SeriesCard = (props) => {
  const { currentUser } = useContext(UserStateContext);
  const currentUserId = currentUser?.uid;
  const { title, plot, imdbRating, poster, imdbID } = props;

  const addSeriesToWatchListFromRatingPage = async () => {
    if (currentUserId) {
      const seriesInfo = await fetchAllSeriesInformation(
        "seriesInformation",
        imdbID
      );
      console.log(seriesInfo);
      console.log(imdbID);
      console.log(currentUserId);
      await addSeriesToWatchlist(currentUserId, imdbID, seriesInfo);
    } else {
      console.log("Login please");
    }
  };
  return (
    <Card>
      <Card.Img variant="top" src={poster} />
      <Card.Header>
        <div className="card_header">
          <div className="imdb_info">
            <div className="imdb_logo">
              <img src="/img/icons/imdb_small.png" alt="imdb logo"></img>{" "}
            </div>
            <div className="imdbRating">{imdbRating}</div>
          </div>
          <div className="button_addToWL">
            <button
              className="button_toWatchList"
              type="button"
              onClick={() => addSeriesToWatchListFromRatingPage()}
            >
              to WL
            </button>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{plot}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SeriesCard;
