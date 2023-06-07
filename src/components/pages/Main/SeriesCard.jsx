import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import fetchDataIfNeed from "../../../common/utils/fetchDataIfNeed";

const SeriesCard = () => {
  const [ratingList, setRatingList] = useState([]);
  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    fetchDataIfNeed("ratingList").then((data) => setRatingList(data));
  }, []);

  useEffect(() => {
    if (ratingList.length > 0) {
      const arrayOfImdbIds = ratingList.map((path) => path.split("/").at(2));
      console.log(arrayOfImdbIds);
    }
  }, [ratingList]);

  return (
    <Container fluid>
      <Row xs={2} sm={3} md={4} lg={5} xl={6} xxl={"auto"} className="g-4">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src="https://image.tmdb.org/t/p/original/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SeriesCard;
