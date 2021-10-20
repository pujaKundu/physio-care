import React from "react";
import med from "../../images/Banner/medical-assistant-helping-patient-with-physiotherapy-exercises.jpg";

import { Col, Row, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} lg={6} className="mt-5">
          <h1 className="text-primary fs-1">Physio Care</h1>
          <br />
          <h1>Live a better life with US</h1>
        </Col>
        <Col xs={12} lg={6}>
          <img src={med} className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
