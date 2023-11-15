import React from "react";
import Accordion from "react-bootstrap/Accordion";

import CurrentSeasonEpisodeChanger from "./CurrentSeasonEpisodeChanger";

const WatchingSeriesItem = ({ imdbID }) => {
  return (
    <Accordion.Item eventKey={imdbID}>
      <Accordion.Header>
        <div className="watchingSeriesItem_info">
          <div className="watchingSeriesItem_title">
            <b>{imdbID.seriesInfo.title}</b>
          </div>
          <div className="watchingSeriesItem_currentSeason">
            Current Season: <b>{imdbID.currentSeason}</b>
          </div>
          <div className="watchingSeriesItem_currentEpisode">
            Current Episode: <b>{imdbID.currentEpisode}</b>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="change_currentPosition">
          <CurrentSeasonEpisodeChanger />
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default WatchingSeriesItem;
