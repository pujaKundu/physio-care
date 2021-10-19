import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";

const email = <FontAwesomeIcon icon={faEnvelope} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const location = <FontAwesomeIcon icon={faSearchLocation} />;
const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <h3 className="my-4">
        <img
          className="rounded-circle"
          width="50"
          height="50"
          src={logo}
          alt=""
        />{" "}
        Physio Care
      </h3>
      <p>{location} Savar,Dhaka</p>
      <p>{email} info@physio-care.org</p>
      <p>{phone} +880 12345678</p>
    </div>
  );
};

export default Footer;
