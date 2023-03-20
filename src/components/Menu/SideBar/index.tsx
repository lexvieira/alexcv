import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import resume from '../../../data/data.json'
import { IconContext } from 'react-icons'
import './style.css'
import RenderIconSideBar from '../../utils/iconsEnum'
import SideBarProps from '../Interfaces';
import RenderIconsByID from '../../utils/renderIcons'

const SideBar = ({ setSideBarState, display }: SideBarProps) => {
  const [show, setShow] = useState(display)

  // const handleClose = () => setShow(false)
  // const toggleShow = () => setShow((s) => !s)
  // const dataUser = resume.personaldata

  useEffect(() => {
    setShow(display)
  }, [display])

  const topics = resume.topics

  return (

    <>
      <Navbar className='sidebar'
        bg="light"
        expand="lg"
        // style={{ display: show === true ? 'block' : 'none' }}
      >
        <Container fluid>
              <Nav className="mr-auto flex-column nav sidebar text-nowrap">
                <IconContext.Provider
                  value={{
                    color: '#4885ed',
                    size: '1.5em',
                    className: 'global-class-name',
                  }}
                >
                  {/* <ul className=""> */}
                  {topics.map((topic: any, index: number) => (
                    <Nav.Item className="nav-item nav-link" key={index}>
                      <Link className="" to={topic.link} onClick={() => {setSideBarState(false)}}>
                        {/* <RenderIconSideBar icon={topic.icon} /> {show === true ? topic.topic : ""} */}
                        <RenderIconsByID icon={topic.icon} /> {show === true ? topic.topic : ""}
                      </Link>
                    </Nav.Item>
                  ))}
                  {/* </ul> */}
                </IconContext.Provider>
              </Nav>
              {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  )
}

export default SideBar
