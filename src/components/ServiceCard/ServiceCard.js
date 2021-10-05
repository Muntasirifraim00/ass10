import React from "react";
import { Button, Col } from "react-bootstrap";
import "./ServiceCard.css";
const ServiceCard = (props) => {
  const { name, img  } = props.service;
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4  ">
      <Col>
        <div className="card shadow-lg border-2 bg-info" id="card">
          <img src={img} className="card-img-top" id="cardImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default ServiceCard;
