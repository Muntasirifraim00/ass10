import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  //declareing state
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container p-4">
        <h2 className="text-center my-3 text-danger">Availabe Workouts</h2>
        <hr />
        <div className="row">
          {services.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
