import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PersonalData from '../PersonalData'
import resume from '../../../data/data.json'
import './style.css'

const TechnicalSkills = () => {
  const dataTechnicalSkills = resume.technicalskills;
  return (
    <>
      <PersonalData />
      <Container fluid className='buttonspace'>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='capitalize title'>{dataTechnicalSkills.title}</h1>
            <h3>{dataTechnicalSkills.text}</h3>
            
              {dataTechnicalSkills.skills.map((skill, index) => (
                <>
                <Button key={index} variant="primary">{skill}</Button>
                &nbsp;               
                </>                
              ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TechnicalSkills;
