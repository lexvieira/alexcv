import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { AiOutlineMenu } from 'react-icons/ai'
import resume from '../../../data/data.json'
import './style.css'
import RenderIconSideBar from '../../utils/iconsEnum'
import Brand from '../Brand';
import SideBarProps from '../Interfaces'

const Header = ({ setSideBarState, display }: SideBarProps) => {
  const dataIconHeader = resume.header

  return (
    <header>
      <Navbar
        bg="dark"
        expand="lg"
        className="sticky-top p-0 border-bottom shadow"
      >
        <Container fluid>
          {/* <Row>
            <Col xxl="auto"> */}
              {/* <div style={display ? { display: 'none' } : { display: 'block' }}>
              </div> */}
              <Button
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                variant="dark"
                id="sidebarToggle"
                onClick={() =>
                  setSideBarState(display === true ? false : true)
                }
                className="me-2"
              >
                <AiOutlineMenu />
              </Button>              
              <Brand  />
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav"  /> */}
              {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="ms-auto navbar-expand navbar-light" style={{ flexDirection: 'row' }}>
                  <IconContext.Provider
                    value={{ className: 'iconContextheader' }}
                  >
                    {dataIconHeader.icons.map((icon, index: number) => (
                      <Nav.Link href={icon.link} target={'_blank'}>
                        <RenderIconSideBar icon={icon.iconID} />{' '}
                      </Nav.Link>
                    ))}
                  </IconContext.Provider>
                </Nav>
              {/* </Navbar.Collapse> */}
            {/* </Col>
          </Row> */}
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
