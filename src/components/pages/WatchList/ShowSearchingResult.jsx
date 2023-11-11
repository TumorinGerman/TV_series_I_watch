import { React, useContext } from "react";
import { Image, Button } from "react-bootstrap";

import addSeriesToWatchlist from "../../../services/firebase/utils/addSeriesToWatchlist";
import UserStateContext from "../../../context";

const ShowSearchingResult = ({ searchResults }) => {
  const { currentUser } = useContext(UserStateContext);
  const uid = currentUser?.uid;
  const { Response, Poster, imdbRating, Title, Plot, imdbID, totalSeasons } =
    searchResults;

  const handleAddToWatnlistClick = (uid, imdbID, Title, totalSeasons) => {
    addSeriesToWatchlist(uid, imdbID, Title, totalSeasons);
  };

  return (
    <div className="searchResult_container">
      {Response === "True" ? (
        <>
          <div className="poster">
            <Image src={Poster} rounded fluid />
          </div>
          <div className="info">
            <div className="imdb_logo">
              <Image src="/img/icons/imdb_small.png" alt="imdb logo" fluid />
              {imdbRating}
            </div>
            <div>{Title}</div>
            <div>{Plot}</div>
          </div>
          <div className="addToWatchList">
            <Button
              variant="warning"
              size="sm"
              onClick={() =>
                handleAddToWatnlistClick(uid, imdbID, Title, totalSeasons)
              }
            >
              Add
            </Button>{" "}
          </div>
        </>
      ) : (
        searchResults.Error
      )}
    </div>
  );
};

export default ShowSearchingResult;
