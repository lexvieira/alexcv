import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PersonalData from '../PersonalData'
import resume from '../../../data/data.json'
import './style.css'

const Languages = () => {
  const dataLanguages = resume.languages;
  return (
    <>
      <PersonalData />
      <Container fluid className='divlanguages'>
        <Row>
          <Col xs={12} md={12}>
          <h1 className='capitalize title'>{dataLanguages.title}</h1>
            <h3>{dataLanguages.text}</h3>
            <ul>
              {dataLanguages.languages.map((language, index) => (
                <li>
                  <h5 key={index}>{language.language}</h5>
                  <p>
                    {language.level}
                  </p>      
                </li>
              ))}
            </ul>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Languages;
