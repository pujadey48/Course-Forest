import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <Container>
      <h2>Check course info and confirm</h2>
      {course.err_msg && <h2>{course?.err_msg}</h2>}
      {course.name && (
        <Card className="m-2 ">
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <Card.Text>Price: {course.price}</Card.Text>
            <Link to={"/"} className="btn btn-primary">Confirm and Purchase</Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default CheckOut;
