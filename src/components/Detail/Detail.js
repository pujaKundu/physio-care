import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
      (singleDetail) => singleDetail.id === serviceId
    );
    console.log(foundDetail);
  }, [details]);
  return (
    <div>
      {serviceId}
      <p>{info?.service_name}</p>
    </div>
  );
};

export default Detail;
