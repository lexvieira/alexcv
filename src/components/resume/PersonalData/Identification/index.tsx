import React from 'react'
import { Col, Row } from 'react-bootstrap'
import resume from '../../../../data/data.json'
import ProfilePicture from '../../../ProfilePicture'
import LinksContact from '../Links'
import './style.css'

const Identification = () => {
  const dataUser = resume.personaldata

  return (
    // <Container fluid className=''>
      <Row className='align-items-center identification grid'>
        <Col xs={2} md={2} lg={"auto"}>
          <ProfilePicture />
        </Col>
        <Col xs={"auto"} md={"auto"} lg={"auto"} className="align-items-center">
          <div>
            <h1 className="title">{dataUser.name}</h1>
            <p>
              Looking for opportunities in
              {dataUser.objective.map((obj: any, index: number) => (
                <span key={index}>{(index >= 1 ? ', ' : ' ') + obj}</span>
              ))}
            </p> 
            <div className='linkscontacttop'>
              <LinksContact />              
            </div>

          </div>
          
        </Col>
      </Row>
    // </Container>
  )
}

export default Identification
