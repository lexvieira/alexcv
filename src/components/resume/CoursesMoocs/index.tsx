import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import resume from '../../../data/data.json'
import './style.css'

const CoursesMoocs = () => {
  const dataCoursesMoocs = resume.coursesmoocs;
  return (
    <>
      <Container fluid className='divcoursesmoocs'>
        <Row>
          <Col xs={12} md={12}>
            <h1 className='capitalize title'>{dataCoursesMoocs.title}</h1>
            <h3>{dataCoursesMoocs.text}</h3>
              <ul>
                {dataCoursesMoocs.courses.map((course, index) => (
                  <li>
                    <h5>
                      {course.course}
                    </h5>
                    <p>{course.institution}</p>
                    <p>{course.when}</p>
                    <p>{course.link}</p>
                  </li>

                ))}                
              </ul>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CoursesMoocs;
