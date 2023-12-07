import { React, useContext } from "react";
import { Image, Button } from "react-bootstrap";

import addSeriesToWatchlist from "../../../services/firebase/utils/addSeriesToWatchlist";
import { fetchAllSeriesInformation } from "../../../common/utils/fetchData";
import UserStateContext from "../../../context";

const ShowSearchingResult = ({
  searchResults,
  setWatchlistShouldBeUpdated,
}) => {
  const { currentUser } = useContext(UserStateContext);
  const currentUserId = currentUser?.uid;
  const { Response, Poster, imdbRating, Title, Plot, imdbID } = searchResults;

  const handleAddToWatnlistClick = async (currentUserId, imdbID) => {
    const seriesInfo = await fetchAllSeriesInformation(
      "seriesInformation",
      imdbID
    );
    await addSeriesToWatchlist(currentUserId, imdbID, seriesInfo);
    setWatchlistShouldBeUpdated(true);
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
              onClick={() => handleAddToWatnlistClick(currentUserId, imdbID)}
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
