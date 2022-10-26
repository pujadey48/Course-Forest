import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../Courses/LeftSideNav/LeftSideNav";

const CourseDetails = () => {
  const course = useLoaderData();

  function createMarkup(htmlString) {
    return {__html: htmlString};
  }


  return (
    <Container className="mb-5">
      <Row>
        <Col lg="4">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="8">
            <h2>{course.name}</h2>
            <img src={course.image_url} class="img-fluid" alt="..."></img>
            <p className="text-muted mb-1 mt-2">Rating:{course.rating.number} Badge:{course.rating.badge}</p>
            <p className="fw-bold fs-3">Price: {course.price}</p>
            <div dangerouslySetInnerHTML={createMarkup(course.details)} />
            {/* <p>{course.details}</p> */}
            <button type="button" class="btn btn-primary">CheckOut</button>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
