import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import resume from '../../../data/data.json'
import './style.css'

const Volunteering = () => {
  const dataVolunteering = resume.volunteering;
  return (
    <>
      <Container fluid  className='divvolunteering'>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='capitalize title'>{dataVolunteering.title}</h1>
            <h3>{dataVolunteering.text}</h3>
              <ul>
                {dataVolunteering.volunteers.map((volunteer, index) => (
                  <li key={index}>
                    <h4>
                      {volunteer.year}
                    </h4>
                    <p>{volunteer.activities}</p>
                  </li>

                ))}                
              </ul>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Volunteering;
