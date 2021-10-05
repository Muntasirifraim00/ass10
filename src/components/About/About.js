import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
const About = () => {
  return (
    <Container className="p-5">
      <div className="d-flex">
        <Col lg={12} md={6} xs={12}>
          <div>
            <h3>About Us</h3>
            <p>
              E-learning is a structured course or learning experience delivered
              electronically; it can also include performance support content.
              There are also many different elements that can make up an
              e-learning program, such as live or pre-recorded lecture content,
              video, quizzes, simulations, games, activities, and other
              interactive elements. Keep in mind that you may also see the term
              e-learning more broadly as a catchall for any learning content
              delivered electronically.
            </p>
          </div>
          <div>
            <div>
              <ProgressBar variant="success" now={40} />
              <ProgressBar variant="info" now={20} />
              <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} />
                <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
              </ProgressBar>
              <ProgressBar variant="warning" now={60} />
              <ProgressBar variant="danger" now={50} />
              <ProgressBar variant="info" now={50} />
              <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} />
                <ProgressBar variant="warning" now={28} key={2} />
                <ProgressBar striped variant="danger" now={20} key={3} />
              </ProgressBar>
              <ProgressBar variant="danger" now={80} />
              <ProgressBar variant="success" now={80} />
            </div>
          </div>
        </Col>
      </div>



    </Container>
  );
};

export default About;
