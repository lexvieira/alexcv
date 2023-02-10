import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../FooterPage'
import Header from '../Menu/HeaderPage'
// import Parent from '../Pass'
import SideBar from '../Menu/SideBar'
import './style.css'

// interface Props {
//   component: any;
// }

// const Main: React.FC<Props> = ({ component }: Props) => {

const Main = () => {
  const [show, setShow] = useState<boolean>(true)
  const setSideBarState = (display: boolean) => {
    setShow(display)
    // alert(display);
  }

  return (
    <>
      {/* */}
      <div className="p-0 text-wrap" id="wrapper">
        <Row noGutters className='g-0'>
          {/* <Col> */}
            <SideBar showsidebar={show} />
          {/* </Col> */}
          <Col className="">
            <Container fluid className="p-0 page-content-wrapper">
              <Row noGutters>
                <Col className="">
                  <Header setSideBarState={setSideBarState} display={show} />
                  <Container fluid className="main">
                    <Outlet />
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>

      {/* setshow={setShow()}  */}
      {/* https://startbootstrap.github.io/startbootstrap-simple-sidebar/ */}
      {/* https://css-tricks.com/best-way-implement-wrapper-css/ */}
      {/* <Parent /> Test Passing Parameters */}
      <Footer />
    </>
  )
}

export default Main
