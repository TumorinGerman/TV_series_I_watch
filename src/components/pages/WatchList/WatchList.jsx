import { React, useState } from "react";
import FindSeries from "./FindSeries";
import ShowSearchingResult from "./ShowSearchingResult";
import WatchingSeries from "./WatchingSeries";

const WatchList = () => {
  const [searchResults, setSearchResults] = useState({});
  return (
    <div className="wrapper">
      <div className="watchList_container">
        <div className="searchSeries_container">
          <FindSeries setSearchResults={setSearchResults} />
          {searchResults && (
            <ShowSearchingResult searchResults={searchResults} />
          )}
        </div>
        <WatchingSeries />
      </div>
    </div>
  );
};

export default WatchList;
