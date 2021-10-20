import React from "react";
import med from "../../images/Banner/medical-assistant-helping-patient-with-physiotherapy-exercises.jpg";
import doc from "../../images/Banner/doctor-with-patient-physiotherapy-clinic.jpg";
import volunteer from "../../images/Banner/group-happy-diverse-volunteers.jpg";
import { Row, Container, Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* <Col xs={12} lg={6} className="mt-5 "> */}
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={med} alt="First slide" />
            <Carousel.Caption>
              <h3 className="fs-1 fw-bold ">Experienced Staff</h3>
              <p className="fs-5">
                Get service from experienced nurses and staff
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={doc} alt="Second slide" />

            <Carousel.Caption>
              <h3 className="fs-1 fw-bold">Experienced Doctors</h3>
              <p className="fs-5">Amazing treatment from doctors.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={volunteer} alt="Third slide" />

            <Carousel.Caption>
              <h3 className="fs-1 fw-bold">Entusiastic Volunteers</h3>
              <p className="fs-5">Volunteer from all aorund the world.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default Banner;
