import React from "react";
import { useEffect, useState } from "react";
import { Card, Container,Button, ProgressBar, Row } from "react-bootstrap";
import img4 from "./4.jpg"
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img5 from "./5.jpg"
import ServiceCard from "../ServiceCard/ServiceCard";
import "../TopServices/TopServices.css"


const TopServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const topServices = services;

  return (
    <div className="p-4 bg-light">
      <h2 className=" text-center my-4">Hot workout Available</h2>

      <div id="carouselExampleIndicators" class="carousel slide w-75 mx-auto text-center" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <Container>
        <Row>
          {topServices.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </Row>
      </Container>
      <br />
      <div className="d-flex">
        <div className="w-50 mx-5">
          <div className="mb-3">
            <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter Phone Number" />
          </div>
          <div className="mb-3">
            <textarea className="form-control form-control-lg" placeholder="Enter Massage" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-lg px-5 py-2 btn-warning">Send Massage</button>
        </div>
        <div>
          {/* <img src={img4} className=" image-css " id="cardImg" alt="..." /> */}
          <img className=" image-css  " src={img4} alt=""></img>
        </div>
      </div>
      <br />     <br />

      <h1> Our Best Experts</h1> <br />

      <div className="d-flex mx-5  gap-4   " >
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            <Card.Title>Hatha Yoga</Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Bikram yoga</Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Aerial Yoga</Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Power Yoga</Card.Title>
          </Card.Body>
        </Card>
        </div>
      </div>

      <br />     <br />     <br />
    </div>
  );
};

export default TopServices;
