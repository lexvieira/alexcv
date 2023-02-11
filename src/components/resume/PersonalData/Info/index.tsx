import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const Info = () => {
  return (

    <>
      <Container>
        <Row>
          <Col>
            <h3 className="text-success">
              That's the first version of the Digital CV for who want to show your skills in a easy way. 
            </h3>
            <p></p>
            <p>
              Please, select the topic on the lateral menu. Any suggestion or project, contact me by chat on the bottom of the page or in any of my contacts ;).
            </p>
            <p>
              For those who want to learn React or other programming languages, the project code is available here 
            </p>
            <p>
              Multilingual coming soon ;) 
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={3} md={4} sm={6}>
            <Image src="img/clickmenu.jpg" alt="Text me here" rounded />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Image src="img/clickedmenu.jpg" alt="Text me here" rounded />
          </Col>     
          <Col lg={3} md={4} sm={6}>
            <Image src="img/chatanycode.jpg" alt="Text me here" rounded width={220} height={220} />
          </Col>                   
        </Row>
      </Container>
    </>
  )
}

export default Info;