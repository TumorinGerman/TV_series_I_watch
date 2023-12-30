import { React, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import CurrentSeasonEpisodeChanger from "./CurrentSeasonEpisodeChanger";

const WatchingSeriesItem = ({ imdbID }) => {
  const { currentSeason, currentEpisode, seriesInfo } = imdbID;
  const [seasonState, setSeasonState] = useState(currentSeason);
  const [episodeState, setEpisodeState] = useState(currentEpisode);
  const { title, seasons, imdbid } = seriesInfo;

  return (
    <Accordion.Item eventKey={imdbID}>
      <Accordion.Header>
        <div className="watchingSeriesItem_info">
          <div className="watchingSeriesItem_title">
            <b>{title}</b>
          </div>
          <div className="watchingSeriesItem_currentSeason">
            Current Season: <b>{seasonState}</b>
          </div>
          <div className="watchingSeriesItem_currentEpisode">
            Current Episode: <b>{episodeState}</b>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <CurrentSeasonEpisodeChanger
          seasons={seasons}
          seasonState={seasonState}
          setSeasonState={setSeasonState}
          episodeState={episodeState}
          setEpisodeState={setEpisodeState}
          imdbid={imdbid}
        />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default WatchingSeriesItem;
