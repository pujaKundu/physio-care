import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { service_name, service_description, img, id } = service;
  return (
    <div className="service-container">
      <div className="service-single">
        <img src={img} className="img-fluid" alt="" />
        <h3>{service_name}</h3>
        <p>{service_description}</p>
        <Link to={`/detail/${id}`}>
          <button className="btn btn-primary">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
