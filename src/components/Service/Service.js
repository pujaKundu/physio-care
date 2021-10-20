import React from "react";

import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { service_name, service_description, img, id } = service;
  return (
    <div className="service-container">
      <div className="service-single shadow my-4 bg-light">
        <img src={img} className="img-fluid mt-3" alt="" />
        <h3>{service_name}</h3>
        <p className="text-justify">{service_description}</p>
        <Link to={`/detail/${id}`}>
          <button className="btn btn-primary mb-3">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
