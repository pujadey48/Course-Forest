import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className=" col-lg-4 col-md-6 col-12 mb-5">
      <Card className="m-2 ">
        <Card.Img
          className="card-img-top img-fluid bg-light"
          variant="top"
          style={{ height: '10rem'}}
          src={course.thumbnail_url}
        />
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Link to={"/course/" + course._id} className="btn btn-primary">
            Show Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
