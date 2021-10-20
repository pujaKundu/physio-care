import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="fs-1 my-5 fw-bold">Our Services</h1>

      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </Container>
  );
};

export default Services;
