import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PersonalData from '../PersonalData'
import resume from '../../../data/data.json'
import './style.css'

const WorkExperience = () => {
  const dataWorkExperience = resume.workexperience;
  return (
    <>
      <PersonalData />
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='capitalize title'>{dataWorkExperience.title}</h1>
            <h3>{dataWorkExperience.text}</h3>
              <ul>
                {dataWorkExperience.companies.map((company, index) => (
                  <li key={index}>
                    <h5>
                      {company.company}
                    </h5>
                    <p>{company.when}</p>
                    <p>{company.activities}</p>
                    <ul>
                      {company.subcompanies?.map((company,index)=> (
                        <li>
                          <h5>
                            {company.occupation}
                          </h5>
                          <p>{company.when}</p>
  
                            {/* if company.activities.length > 0){
                              <h3>Activities</h3>
                            }                            */}
                 
                          <ul>
                            {
                              company.activities.map((activity,index) => (
                                <li key={index}>{activity}</li>                              
                              ))
                            }                            
                          </ul>
                        </li>                        
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

export default WorkExperience;
