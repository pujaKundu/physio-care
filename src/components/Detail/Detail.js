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
    <div className="my-5 mx-5 bg-light rounded">
      <img src={info?.img} className="img-fluid pt-5" alt="" />
      <h3 className="fs-2 my-2 text-primary">{info?.service_name}</h3>
      <p className="pb-5 fs-5 px-5">{info?.service_description}</p>
    </div>
  );
};

export default Detail;
