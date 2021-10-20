import React from "react";
import { Col, Container, ProgressBar } from "react-bootstrap";
import img1 from "./1.jpg"
import "../About/About.css"
const About = () => {
  return (
    <Container className="p-5">
      <div className="d-flex">
        <Col lg={6} md={6} xs={12}>
          <div>
            <h3>About Us</h3>
            <p>
            Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.
            The first mention of the word “yoga” appears in Rig Veda, a collection of ancient texts. Yoga comes from the Sanskrit word “yuj,” which means “union” or “to join.”

Yoga can be traced back to northern India over 5,000 years ago.

Indian monks spread their knowledge of yoga in the West during the late 1890s. Modern yoga teachings became widely popular in Western countries by the 1970s.
            </p>
          </div>
        </Col>
        <div>
          <img className="image-sizing" src={img1} alt=""/>
          </div>
      </div>



    </Container>
  );
};

export default About;
