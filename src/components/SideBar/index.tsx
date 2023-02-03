import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import resume from '../../data/data.json'
import ProfilePicture from '../ProfilePicture'
import { IconContext } from 'react-icons'
// import { MdSummarize } from 'react-icons/md'
// import * as FaIcons from 'react-icons/fa'
// import { Components } from 'react-html-string';
import './style.css'
import RenderIconSideBar from '../utils/iconsEnum';

const SideBar = () => {
  // const [dataUser, setDataUser] = useState<any>({})
  // // const [objective, setObjectives] = useState<any>([])
  // const [topic, setTopics] = useState<any>([])

  // const dataUser = resume.personaldata;
  // const objective = resume.pe
  const topics = resume.topics


  return (
    <Container fluid>
      <Row>
        <Col className="position-sticky pt-3 sidebar-sticky">
          <Navbar>
            <Navbar.Brand href="/">
              <ProfilePicture />
            </Navbar.Brand>
          </Navbar>
          <Navbar>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto nav flex-column sidebar">
                <IconContext.Provider
                  value={{
                    color: '#4885ed',
                    size: '1.5em',
                    className: 'global-class-name',
                  }}
                >
                  {/* <ul className=""> */}
                  {topics.map((topic: any, index: number) => (
                    // <li className="nav-item">
                    <Nav.Item className="nav-item nav-link" key={index}>
                      {/* FaListAlt */}
                      {/* {<topic.icon />} */}
                      {/* <MdSummarize />{' '} */}
                      {/* {{RenderIcon(topic.icon: iconsEnum)}
                       */}
                      <span>
                        {/* <RenderIconSideBar icon={topic.icon}/> */}
                        <RenderIconSideBar icon={topic.icon} />{' '}
                      </span>
                      <Link className="" to={topic.link}>
                        {topic.topic}
                      </Link>
                      {/* <Nav.Link href={topic.link}>{topic.topic}</Nav.Link> */}
                    </Nav.Item>
                    // </li>
                  ))}
                  {/* </ul> */}
                </IconContext.Provider>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default SideBar
