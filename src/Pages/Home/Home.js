import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.png";

const Home = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-danger fw-bold fs-3">Unlock the power of your people</h3>
            <p className="text-primary">CourseForest Business is trusted by 12.5K+ companies around the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-danger fw-bold fs-3">Unlock the power of your people</h3>
            <p className="text-primary">CourseForest Business is trusted by 12.5K+ companies around the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <h2 className=" fs-1">A broad selection of courses</h2>
        <p className="text-dark">Choose from 204,000 online video courses with new additions published every month</p>
      </div>
    </Container>
  );
};

export default Home;
