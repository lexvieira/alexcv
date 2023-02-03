import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PersonalData from '../PersonalData'
import resume from '../../../data/data.json'
import './style.css'

const Education = () => {
  const dataEducation = resume.education
  return (
    <>
      <PersonalData />
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='capitalize title'>{dataEducation.title}</h1>
            <ul>
              {dataEducation.schools.map((school, index) => (
                <li>
                  <h3 key={index}>{school.school}</h3> 
                  <p>{school.course}</p>
                  <p>{school.period}</p>
                  <p>{school.thesis}</p>               
                </li>
              ))}
            </ul>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Education;
