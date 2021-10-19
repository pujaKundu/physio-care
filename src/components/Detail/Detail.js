import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  let { serviceId } = useParams();
  const [detail, setDetail] = useState([]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  useEffect(() => {
    const foundDetail = detail.find(
      (singleDetail) => singleDetail.id === serviceId
    );
    console.log(foundDetail);
  }, [detail]);
  return (
    <div>
      {serviceId}
      <p>{info?.service_name}</p>
    </div>
  );
};

export default Detail;
