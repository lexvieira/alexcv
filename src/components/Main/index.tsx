import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../FooterPage'
import BackHome from '../Menu/Back'
import Header from '../Menu/HeaderPage'
// import Parent from '../Pass'
import SideBar from '../Menu/SideBar'
import './style.css'

// interface Props {
//   component: any;
// }

// const Main: React.FC<Props> = ({ component }: Props) => {

const Main = () => {
  const [show, setShow] = useState<boolean>(false)
  const setSideBarState = (display: boolean) => {
    setShow(display)
    // alert(display);
  }

  return (
    <>
      {/* */}
      {/* Wrapper, put Sidebar, Header and Content in a Div */}
      <Header setSideBarState={setSideBarState} display={show} />
      <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <SideBar setSideBarState={setSideBarState} display={show} />
        {/* Page Content Wrapper, include Header and Content Together */}
        <div className="page-content-wrapper">
          <Container fluid className="main">
            <Row>
              <Col xl={9} lg={9} md={'auto'} sm={'auto'} >
                <Outlet />
              </Col>
            </Row>
            <Row>
              <Col style={{marginTop:"25px", marginBottom: "10px"}}>
                <BackHome />
              </Col>
            </Row>
          </Container>
        </div>
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
