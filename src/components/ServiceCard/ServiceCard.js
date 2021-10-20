import React from "react";
import { Button, Col } from "react-bootstrap";
import "./ServiceCard.css";
import { Link } from 'react-router-dom';
const ServiceCard = (props) => {
  const { name, img , description ,key } = props.service;
  return (
    
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4  ">
      <Col>
        <div className="card shadow-lg border-2 bg-info" id="card">
          <img src={img} className="card-img-top" id="cardImg" alt="..." />
          <div className="card-body">
            <h4 className="card-title text-center">{name}</h4>
            <br/>
            {/* <p className="px-3">{description}</p> */}


            <Link to={`/booking/${description}`}>
               <div className=" text-center "> <button className="btn btn-warning ">Description {key.toLowerCase()}</button></div>
            </Link>

            
            {/* <h6 className=" text-center">{description}</h6> */}
          </div>
        </div>
      </Col>
    </div>
  );
};

export default ServiceCard;
