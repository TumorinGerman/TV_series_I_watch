import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserStateContext from "../../../context";
import FindSeries from "./FindSeries";
import ShowSearchingResult from "./ShowSearchingResult";
import WatchingSeriesList from "./WatchingSeriesList";

const WatchList = () => {
  const [searchResults, setSearchResults] = useState({});
  const [watchlistShouldBeUpdated, setWatchlistShouldBeUpdated] =
    useState(true);
  const { currentUser } = useContext(UserStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/loginForm");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <div className="watchList_container">
        <div className="searchSeries_container">
          <FindSeries setSearchResults={setSearchResults} />
          {searchResults && (
            <ShowSearchingResult
              searchResults={searchResults}
              setWatchlistShouldBeUpdated={setWatchlistShouldBeUpdated}
            />
          )}
        </div>
        <WatchingSeriesList
          watchlistShouldBeUpdated={watchlistShouldBeUpdated}
          setWatchlistShouldBeUpdated={setWatchlistShouldBeUpdated}
        />
      </div>
    </div>
  );
};

export default WatchList;
