import { React, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";

import updateWatchlistPosition from "../../../services/firebase/utils/updateWatchlistPosition";

const CurrentSeasonEpisodeChanger = ({
  seasons,
  seasonState,
  setSeasonState,
  episodeState,
  setEpisodeState,
  imdbid,
}) => {
  const [currSeason, setCurrSeason] = useState(seasonState);
  const [currEpisode, setCurrEpisode] = useState(episodeState);

  const displayedSeasons = Object.keys(seasons).map(
    (season) => Number(season) + 1
  );

  const howMachEpisodesInCurrentSeason = seasons[currSeason - 1].episode_count;
  const episodes = [];
  for (let index = 1; index <= howMachEpisodesInCurrentSeason; index++) {
    episodes.push(<Dropdown.Item eventKey={index}>{index}</Dropdown.Item>);
  }

  const handleDropdownSelect = (dropdownType) => {
    return (eventKey) => {
      if (dropdownType === "season") {
        setCurrSeason(eventKey);
      } else {
        setCurrEpisode(eventKey);
      }
    };
  };

  const handleSaveChangesCurrentEpisodeOrSeason = async () => {
    await updateWatchlistPosition(currSeason, currEpisode, imdbid);
    setSeasonState(currSeason);
    setEpisodeState(currEpisode);
  };

  return (
    <div className="change_currentPosition">
      <div className="changers_container">
        <div className="change_currentSeason">
          <b>Change current season:</b>
          <DropdownButton
            id="dropdown-basic-button"
            size="sm"
            title={currSeason}
            //   onSelect={(eventKey) => handleItemsSelected(eventKey)}
            onSelect={handleDropdownSelect("season")}
          >
            {displayedSeasons.map((season) => (
              <Dropdown.Item eventKey={season}>{season}</Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div className="change_currentEpisode">
          <b>Change current episode:</b>
          <DropdownButton
            id="dropdown-basic-button"
            size="sm"
            title={currEpisode}
            onSelect={handleDropdownSelect("episode")}
          >
            {episodes}
            {/* {displayedSeasons.map((season) => (
            <Dropdown.Item eventKey={season}>{season}</Dropdown.Item>
          ))} */}
          </DropdownButton>
        </div>
      </div>
      <div className="button_container">
        <div className="button_saveChanges">
          <Button
            variant="warning"
            size="sm"
            onClick={() => handleSaveChangesCurrentEpisodeOrSeason()}
          >
            Save
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CurrentSeasonEpisodeChanger;
