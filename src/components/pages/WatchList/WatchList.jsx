import { React, useState } from "react";
import FindSeries from "./FindSeries";
import ShowSearchingResult from "./ShowSearchingResult";

const WatchList = () => {
  const [searchResults, setSearchResults] = useState({});
  console.log("searchResults", searchResults);
  return (
    <div className="wrapper">
      <div className="watchList_container">
        <FindSeries setSearchResults={setSearchResults} />
        {searchResults && <ShowSearchingResult searchResults={searchResults} />}
      </div>
    </div>
  );
};

export default WatchList;
