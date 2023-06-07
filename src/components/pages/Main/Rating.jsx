import React from "react";
import SeriesCard from "./SeriesCard";
import { CardGroup } from "react-bootstrap";

const Rating = () => {
  return (
    <>
      <h3>Most popular TV series</h3>
      <div className="series_cards">
        <CardGroup>
          <SeriesCard />
        </CardGroup>
      </div>
    </>
  );
};

export default Rating;
