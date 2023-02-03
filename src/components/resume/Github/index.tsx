import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PersonalData from '../PersonalData'
import resume from '../../../data/data.json'
import './style.css'
import { Link } from 'react-router-dom'

const Github = () => {
  const dataGithub = resume.github;
  return (  
    <>
      <PersonalData />
      <Container fluid className='divgithub'>
        <Row>
          <Col xs={12} md={12}>
          <h1 className='capitalize title'>{dataGithub.title}</h1>
            <h3>{dataGithub.text}</h3>
            <ul>
              {dataGithub.projects.map((project, index) => (
                <li>
                  <h5 key={index}>{project.text}</h5>
                  {
                    project.links.map((link, index) => (
                     <Link to={link} key={index}>{link}</Link>                      
                    ))
                  }            
                </li>
              ))}
            </ul>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Github;
