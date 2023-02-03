import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet} from 'react-router-dom'
import Footer from '../FooterPage'
import Header from '../HeaderPage'
import SideBar from '../SideBar'
import './mainStyle.css';

// interface Props {
//   component: any;
// }

// const Main: React.FC<Props> = ({ component }: Props) => {
const Main = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col
            md={3}
            id="sidebarMenu"
            lg={2}
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <SideBar />
          </Col>
          <Col md={9} lg={10} px-md={4} className="main">
            {/* {component} */}
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Main
