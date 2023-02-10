import React, { useEffect, useState } from 'react'
import {
  Alert,
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import resume from '../../../data/data.json'
import { IconContext } from 'react-icons'
// import { MdSummarize } from 'react-icons/md'
// import * as FaIcons from 'react-icons/fa'
// import { Components } from 'react-html-string';
import './style.css'
import RenderIconSideBar from '../../utils/iconsEnum'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaAutoprefixer } from 'react-icons/fa'
import Brand from '../Brand'

interface Props {
  showsidebar: Boolean
}

// const Main: React.FC<Props> = ({ component }: Props) => {

const SideBar: React.FC<Props> = ({ showsidebar }: Props) => {
  const [show, setShow] = useState(showsidebar)

  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s) => !s)
  const dataUser = resume.personaldata

  useEffect(() => {
    setShow(showsidebar)
  }, [showsidebar])
  // const [dataUser, setDataUser] = useState<any>({})
  // // const [objective, setObjectives] = useState<any>([])
  // const [topic, setTopics] = useState<any>([])

  // const dataUser = resume.personaldata;
  // const objective = resume.pe

  // alert(showsidebar);
  const topics = resume.topics

  return (
    // <Container fluid className="p-0">
    //   <Row noGutters>
    <Col 
      lg={2}
      md={3}
      sm={4}
      xs={'auto'}
      className="g-0"
      style={{ display: show === true ? 'block' : 'none' }}
    >
      <Navbar className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow headerHeight' id="">
        <Brand />

        {/* <Button variant="primary" onClick={toggleShow} className="me-2">
              show
            </Button>             */}
      </Navbar>
      {/* <Offcanvas show={show} onHide={handleClose}> */}
      <Navbar>
        {/* <Navbar.Brand href="/">
          <ProfilePicture />
        </Navbar.Brand> */}
        <Container>
          {/* // https://react-bootstrap.netlify.app/components/offcanvas/#rb-docs-content */}
          <Navbar.Collapse id="responsive-navbar-nav">
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
                    <Link className="" to={topic.link}>
                      <RenderIconSideBar icon={topic.icon} /> {topic.topic}
                    </Link>
                    {/* <Nav.Link href={topic.link}>{topic.topic}</Nav.Link> */}
                  </Nav.Item>
                  // </li>
                ))}
                {/* </ul> */}
              </IconContext.Provider>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Offcanvas> */}
    </Col>
    //   </Row>
    // </Container>
  )
}

export default SideBar
