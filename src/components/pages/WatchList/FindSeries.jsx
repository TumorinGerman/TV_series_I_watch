import { React, useId, useState } from "react";
import Form from "react-bootstrap/Form";

const FindSerias = () => {
  const seriesSelectId = useId();
  const [selectedSeries, setSelectedSeries] = useState();
  const [seriesTitle, setSeriesTitle] = useState("");
  console.log("seriesTitle", seriesTitle);
  console.log("selectedSeries", selectedSeries);
  return (
    <div className="findSeries_container">
      <label htmlFor={seriesSelectId}>Pick a TV shows:</label>
      <Form.Select
        id={seriesSelectId}
        name="seriesSelectId"
        defaultValue={seriesTitle}
        value={seriesTitle}
        onChange={(e) => setSelectedSeries(e.target.value)}
      >
        <option></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
};

export default FindSerias;
