import React from "react";
import { Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCardHome = ({ course }) => {
  return (
    <div className=" col-lg-4 col-md-6 col-12 ">
      <Card className="m-2 ">
        {/* <Card.Img
          className="card-img-top img-fluid bg-light"
          variant="left"
          style={{ height: '10rem'}}
          src={course.thumbnail_url}
        /> */}
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Link to={"/course/" + course._id} className="btn btn-primary">
            Show Details <FaArrowRight></FaArrowRight>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCardHome;
