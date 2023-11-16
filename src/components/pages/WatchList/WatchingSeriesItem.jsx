import React from "react";
import Accordion from "react-bootstrap/Accordion";

import CurrentSeasonEpisodeChanger from "./CurrentSeasonEpisodeChanger";

const WatchingSeriesItem = ({ imdbID }) => {
  const { currentSeason, currentEpisode, seriesInfo } = imdbID;
  console.log("seriesInfo", seriesInfo);
  const { title, seasons } = seriesInfo;
  return (
    <Accordion.Item eventKey={imdbID}>
      <Accordion.Header>
        <div className="watchingSeriesItem_info">
          <div className="watchingSeriesItem_title">
            <b>{title}</b>
          </div>
          <div className="watchingSeriesItem_currentSeason">
            Current Season: <b>{currentSeason}</b>
          </div>
          <div className="watchingSeriesItem_currentEpisode">
            Current Episode: <b>{currentEpisode}</b>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <CurrentSeasonEpisodeChanger
          seasons={seasons}
          currentSeason={currentSeason}
          currentEpisode={currentEpisode}
        />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default WatchingSeriesItem;
