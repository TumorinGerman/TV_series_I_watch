import React from "react";
import Accordion from "react-bootstrap/Accordion";

const WatchingSeriesItem = ({ imdbID }) => {
  return (
    <Accordion.Item eventKey={imdbID}>
      <Accordion.Header>
        <div className="watchingSeriesItem_info">
          <div className="watchingSeriesItem_title">
            <b>{imdbID.Title}</b>
          </div>
          <div className="watchingSeriesItem_currentSeason">
            Current Season: <b>{imdbID.currentSeason}</b>
          </div>
          <div className="watchingSeriesItem_currentEpisode">
            Current Episode: <b>{imdbID.currentEpisode}</b>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>Bla-bla-bla</Accordion.Body>
    </Accordion.Item>
  );
};

export default WatchingSeriesItem;
