import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../CourseCard/CourseCard";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const CourseContainer = () => {
  const courses = useLoaderData();
  return (
    <Container>
      <Row>
        <Col lg="4">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="8">
          <div className="d-flex flex-wrap">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                course={course}></CourseCard>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseContainer;
