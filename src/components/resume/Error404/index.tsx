import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Error404 = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Sorry Buddy ;)</h1>
            <p>
              The page that you are looking for doesn't  exist :(
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Error404;
