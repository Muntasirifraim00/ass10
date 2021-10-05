import React from "react";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import ServiceCard from "../ServiceCard/ServiceCard";
const TopServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const topServices = services.slice(0, 4);
  return (
    <div className="p-4 bg-light">
      <h2 className="text-center my-4">Hot workout Available</h2>
      <Container>
        <Row>
          {topServices.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TopServices;
