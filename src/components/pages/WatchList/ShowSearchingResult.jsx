import { React } from "react";
import { Image } from "react-bootstrap";

const ShowSearchingResult = ({ searchResults }) => {
  console.log(searchResults);
  return (
    <div className="searchResult_container">
      {searchResults.Response === "True" ? (
        <>
          <div className="poster">
            <Image src={searchResults.Poster} rounded fluid />
          </div>
          <div className="info">
            <div className="imdb_logo">
              <Image src="/img/icons/imdb_small.png" alt="imdb logo" fluid />
              {searchResults.imdbRating}
            </div>
            <div>{searchResults.Title}</div>
            <div>{searchResults.Plot}</div>
          </div>
        </>
      ) : (
        searchResults.Error
      )}
    </div>
  );
};

export default ShowSearchingResult;
