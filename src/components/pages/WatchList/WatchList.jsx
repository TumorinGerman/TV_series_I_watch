import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserStateContext from "../../../context";
import FindSeries from "./FindSeries";
import ShowSearchingResult from "./ShowSearchingResult";
import WatchingSeriesList from "./WatchingSeriesList";

const WatchList = () => {
  const [searchResults, setSearchResults] = useState({});
  const { currentUser } = useContext(UserStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/loginForm");
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="watchList_container">
        <div className="searchSeries_container">
          <FindSeries setSearchResults={setSearchResults} />
          {searchResults && (
            <ShowSearchingResult searchResults={searchResults} />
          )}
        </div>
        <WatchingSeriesList />
      </div>
    </div>
  );
};

export default WatchList;
