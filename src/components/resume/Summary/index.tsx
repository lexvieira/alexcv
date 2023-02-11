import React from 'react'
import resume from '../../../data/data.json'
import './style.css'

const Summary = () => {
  const dataSummary = resume.summary
  return (
    <>
      {/* <Container fluid>
        <Row>
          <Col xs={12} md={12}> */}
            <h1 className='title'>{dataSummary.title}</h1>
            {dataSummary.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          {/* </Col>
        </Row>
      </Container> */}
    </>
  )
}

export default Summary
