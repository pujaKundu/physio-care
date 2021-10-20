import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { serviceId } = useParams();

  const [details, setDetails] = useState([]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  useEffect(() => {
    const foundDetail = details.find(
      (singleDetail) => parseInt(singleDetail.id) === parseInt(serviceId)
    );
    setInfo(foundDetail);
  }, [details]);
  return (
    <div className="my-5 mx-5">
      <img src={info?.img} className="img-fluid" alt="" />
      <h3>{info?.service_name}</h3>
      <p>{info?.service_description}</p>
    </div>
  );
};

export default Detail;
