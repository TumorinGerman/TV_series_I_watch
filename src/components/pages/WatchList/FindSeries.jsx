import { React, useId, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { fetchSeriesByTitle } from "../../../common/utils/fetchData";

const FindSerias = () => {
  const seriesSelectId = useId();
  const [seriesTitle, setSeriesTitle] = useState("");

  useEffect(() => {
    fetchSeriesByTitle("findSeriesByTitle", seriesTitle).then((data) =>
      console.log(data)
    );
  }, [seriesTitle]);

  console.log("seriesTitle", seriesTitle);
  return (
    <div className="findSeries_container">
      <label htmlFor={seriesSelectId}>Find a TV shows:</label>
      <Form.Control
        id={seriesSelectId}
        name="seriesTitle"
        type="text"
        placeholder="Start write series title here"
        onChange={(e) => setSeriesTitle(e.target.value)}
      />
    </div>
  );
};

export default FindSerias;
