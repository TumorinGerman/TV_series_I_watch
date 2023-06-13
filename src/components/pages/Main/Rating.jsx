import React, { useEffect, useState } from "react";
import SeriesCard from "./SeriesCard";
import { CardGroup, Container, Row, Col } from "react-bootstrap";

import fetchRating from "./utils/fetchRating";

const Rating = () => {
  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    fetchRating().then((data) => setRatingData(data));
  }, []);

  return (
    <>
      <h3>Most popular TV series</h3>
      <div className="series_cards">
        <CardGroup>
          <Container fluid>
            <Row
              xs={2}
              sm={3}
              md={4}
              lg={5}
              xl={6}
              xxl={"auto"}
              className="g-4"
            >
              {ratingData.map(({ Title, Poster, Plot, imdbRating }, idx) => (
                <Col key={idx}>
                  <SeriesCard
                    title={Title}
                    poster={Poster}
                    plot={Plot}
                    imdbRating={imdbRating}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </CardGroup>
      </div>
    </>
  );
};

export default Rating;
