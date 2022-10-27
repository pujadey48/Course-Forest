import React from "react";
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <Container>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header> How many courses are there?</Accordion.Header>
        <Accordion.Body>
          
            There are more than 5000 online premium courses in course forest.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I need to pay monthly?</Accordion.Header>
        <Accordion.Body>
        No. If you purchase premium access to a course then you shall be able to access that course for lifetime.
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </Container> 
  );
};

export default FAQ;
