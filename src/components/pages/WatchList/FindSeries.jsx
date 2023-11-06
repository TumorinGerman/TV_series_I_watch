import { React, useId, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { fetchSeriesByTitle } from "../../../common/utils/fetchData";

const FindSerias = ({ setSearchResults }) => {
  const seriesSelectId = useId();
  const [seriesTitle, setSeriesTitle] = useState("");

  useEffect(() => {
    if (seriesTitle) {
      fetchSeriesByTitle("findSeriesByTitle", seriesTitle).then((data) =>
        setSearchResults(data)
      );
    } else {
      setSearchResults("");
    }
  }, [seriesTitle]);

  return (
    <div className="findSeries_container">
      <label htmlFor={seriesSelectId}>Find TV shows:</label>
      <Form.Control
        id={seriesSelectId}
        name="seriesTitle"
        type="text"
        placeholder="Start write series title here"
        autocomplete="off"
        onChange={(e) => setSeriesTitle(e.target.value)}
      />
    </div>
  );
};

export default FindSerias;
