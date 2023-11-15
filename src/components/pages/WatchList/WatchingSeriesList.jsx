import { React, useEffect, useState, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import UserStateContext from "../../../context";

import WatchingSeriesItem from "./WatchingSeriesItem";
import getSeriesFromWatchlist from "../../../services/firebase/utils/getSeriesFromWatchlist";

const WatchingSeriesList = ({
  watchlistShouldBeUpdated,
  setWatchlistShouldBeUpdated,
}) => {
  const { currentUser } = useContext(UserStateContext);
  const currentUserId = currentUser?.uid;
  const [seriesList, setSeriesList] = useState({});

  console.log("currentUserId", currentUserId);

  useEffect(() => {
    if (watchlistShouldBeUpdated && currentUserId) {
      getSeriesFromWatchlist(currentUserId).then((data) => {
        setSeriesList(data);
      });
      setWatchlistShouldBeUpdated(false);
    }
  }, [watchlistShouldBeUpdated]);

  return (
    <div className="watchingSeriesList_container">
      <Accordion data-bs-theme="dark">
        {Object.keys(seriesList).map((imdbID) => (
          <WatchingSeriesItem key={imdbID} imdbID={seriesList[imdbID]} />
        ))}
      </Accordion>
    </div>
  );
};

export default WatchingSeriesList;
