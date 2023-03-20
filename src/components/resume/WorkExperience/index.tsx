import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import resume from '../../../data/data.json'
import './style.css'

const WorkExperience = () => {
  const dataWorkExperience = resume.workexperience
  return (
    <>
      <Container fluid className="workexperience">
        <Row>
          <Col xs={12} md={12}>
            <h1 className="capitalize title">{dataWorkExperience.title}</h1>
            <h3>{dataWorkExperience.text}</h3>
            <ul>
              {dataWorkExperience.companies.map((company, index) => (
                <li key={index}>
                  <h5>{company.company}</h5>
                  <p>{company.when}</p>
                  {company.activities?.map((activity, index) => (
                    <p key={index}>{activity}</p>
                  ))}
                  <ul>
                    {company.subcompanies?.map((company, index) => (
                      <p>
                        <h5>{company.company}</h5>
                        <h4>{company.occupation}</h4>
                        <p>{company.when}</p>
                        <ul>
                          {company.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                        <hr></hr>
                        {company.technologies.length > 0 ? <h4>Technologies</h4> : ""}
                        {company.technologies?.map((tech, index) => (
                          <>
                            <Button key={index} variant="primary">
                              {tech}
                            </Button>
                            &nbsp;
                          </>
                        ))}
                      </p>
                    ))}
                  </ul>
                  <p></p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WorkExperience
