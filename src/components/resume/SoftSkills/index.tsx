import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PersonalData from '../PersonalData'
import resume from '../../../data/data.json'
import './style.css'

const SoftSkills = () => {
  const dataSoftSkills = resume.softskills
  return (
    <>
      <PersonalData />
      <Container fluid className='buttonspace'>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='capitalize title'>{dataSoftSkills.title}</h1>
            <h3>{dataSoftSkills.text}</h3>
            {dataSoftSkills.skills.map((skill, index) => (
              <>
                <Button key={index} variant="primary">
                  {skill}
                </Button>
                &nbsp;
              </>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SoftSkills
