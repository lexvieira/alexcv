import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../logo.svg'
import RenderIconSideBar from '../utils/iconsEnum'
// import PersonalData from '../resume/PersonalData'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-dark shadow sticky-bottom footer">
        <Row>
          <Col>
            {/* <PersonalData /> */}
          </Col>
        </Row>
        
        <Row>
          <Col md={9} lg={12} px-md={4}>
            Online Resume V1 - {' '}
            <a
              href="https://react-bootstrap.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Developed using React Bootstrap Components{' '}
              <span>
                <img src={logo} className="React-logo" alt="logo" />
              </span>
            </a>
            {' '} 
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noreferrer"
            >
              TypeScript{' '}
              <RenderIconSideBar icon={18} />
            </a>
            {' '} 
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noreferrer"
            >
              Dev Docker{' '}
              <RenderIconSideBar icon={19} />
            </a>
            {' '} 
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed on {' '}
              <RenderIconSideBar icon={20} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
