import React from "react";
import People from "../../People/People";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Success from "../Success/Success";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Success></Success>
      <People></People>
    </>
  );
};

export default Home;
