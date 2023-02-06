import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import resume from '../../../../data/data.json'
import './style.css'

const Identification = () => {
  const dataUser = resume.personaldata

  return (
    <Container fluid className='identification'>
      <Row>
        <Col xs={12} md={12}>
          <h1 className="title">{dataUser.name}</h1>
          <p>
            Looking for opportunities in
            {dataUser.objective.map((obj: any, index: number) => (
              <span key={index}>{(index >= 1 ? ', ' : ' ') + obj}</span>
            ))}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Identification
