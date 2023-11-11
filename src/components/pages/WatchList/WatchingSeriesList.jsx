import { React, useEffect, useState, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import UserStateContext from "../../../context";

import WatchingSeriesItem from "./WatchingSeriesItem";
import getSeriesFromWatchlist from "../../../services/firebase/utils/getSeriesFromWatchlist";

const WatchingSeriesList = () => {
  const { currentUser } = useContext(UserStateContext);
  const uid = currentUser?.uid;
  const [seriesList, setSeriesList] = useState({});

  console.log("seriesList", seriesList);

  useEffect(() => {
    getSeriesFromWatchlist(uid).then((data) => {
      setSeriesList(data);
    });
  }, []);

  return (
    <div className="watchingSeriesList_container">
      <ListGroup>
        {Object.keys(seriesList).map(({ Title }) => (
          <WatchingSeriesItem Title={Title} />
        ))}
      </ListGroup>
    </div>
  );
};

export default WatchingSeriesList;
