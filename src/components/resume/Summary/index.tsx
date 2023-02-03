import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PersonalData from '../PersonalData'
import resume from '../../../data/data.json'

const Summary = () => {
  const dataSummary = resume.summary
  return (
    <>
      <PersonalData />
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='title'>{dataSummary.title}</h1>
            {dataSummary.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Summary
