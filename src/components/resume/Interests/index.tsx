import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import resume from '../../../data/data.json'
import './style.css'

const Interests = () => {
  const dataInterests = resume.interests;
  return (
    <>
      <Container fluid className='divinterests buttonspace'>
        <Row>
          <Col xs={12} md={12} >
            <h1 className='capitalize title'>{dataInterests.title}</h1>
            <h3>{dataInterests.text}</h3>
              {dataInterests.skills.map((interest, index) => (
                <>
                <Button key={index} variant="primary">{interest}</Button>
                {' '}             
                </>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Interests;
