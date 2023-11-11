import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const WatchingSeriesItem = ({ key, Title }) => {
  console.log("Title", Title);
  return (
    <ListGroup.Item id={key} action variant="warning">
      {Title}
    </ListGroup.Item>
  );
};

export default WatchingSeriesItem;
