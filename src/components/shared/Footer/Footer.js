import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCopyright,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const email = <FontAwesomeIcon icon={faEnvelope} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const location = <FontAwesomeIcon icon={faMapMarker} />;
const copyright = <FontAwesomeIcon icon={faCopyright} />;
const Footer = () => {
  return (
    <div className="bg-dark text-white mb-0 py-3">
      <h3 className="mt-4 ">
        <img
          className="rounded-circle"
          width="50"
          height="50"
          src={logo}
          alt=""
        />{" "}
        Physio Care
      </h3>
      <div>
        <p>{location} Savar,Dhaka</p>
        <p>{email} info@physio-care.org</p>
        <p>{phone} +880 12345678</p>
        <p>{copyright}All rights reserved by Physio Care,2021</p>
      </div>
    </div>
  );
};

export default Footer;
