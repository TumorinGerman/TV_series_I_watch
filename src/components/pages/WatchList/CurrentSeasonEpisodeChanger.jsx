import { React, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const CurrentSeasonEpisodeChanger = ({
  seasons,
  currentSeason,
  currentEpisode,
}) => {
  const [currSeason, setCurrSeason] = useState(currentSeason);
  const [currEpisode, setCurrEpisode] = useState(currentEpisode);

  const displayedSeasons = Object.keys(seasons).map(
    (season) => Number(season) + 1
  );

  const handleItemsSelected = (eventKey) => {
    setCurrSeason(eventKey);
  };

  return (
    <div className="change_currentPosition">
      <div className="change_currentSeason">
        <b>Change current season:</b>
        <DropdownButton
          id="dropdown-basic-button"
          size="sm"
          title={currSeason}
          onSelect={(eventKey) => handleItemsSelected(eventKey)}
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
          onSelect={(eventKey) => handleItemsSelected(eventKey)}
        >
          {Object.keys(seasons).map((season) => (
            <Dropdown.Item eventKey={season}>{season}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default CurrentSeasonEpisodeChanger;
