import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const leftQuote = <FontAwesomeIcon icon={faQuoteLeft} />;
const rightQuote = <FontAwesomeIcon icon={faQuoteRight} />;
const Success = () => {
  return (
    <Container className="my-5">
      <h1 className="my-5 fw-bold">Success Stories</h1>
      <Row>
        <Col xs={12} lg={6} className="mt-5">
          <h2 className="text-primary ">
            Ayesha Became a Successful Freelancer
          </h2>
          <br />
          <p>
            {leftQuote}
            Physio Care helped me when I had lost all faith in myself.They
            helped me regain my confidence.{rightQuote}
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <img
            src="https://image.freepik.com/free-photo/portrait-confident-young-businesswoman-sitting-wheelchair-using-laptop-office_23-2148127378.jpg"
            className="img-fluid"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Success;
