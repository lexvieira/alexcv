import React from 'react'
import { Alert, Button, Nav, Navbar } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaAutoprefixer } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import resume from '../../../data/data.json'
import './style.css'
import RenderIconSideBar from '../../utils/iconsEnum'
import Brand from '../Brand'
// import SideBar from '../SideBar'

// interface Props {
//   setSideBarState: boolean,
//   display: boolean
// }props: Props
// {setSideBarStateHeader}

interface SideBarProps {
  setSideBarState: (params: any) => any
  display: boolean
}

const Header = ({ setSideBarState, display }: SideBarProps) => {
  const dataUser = resume.personaldata
  const dataIconHeader = resume.header

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

      <div style={ display ? { display:'none'} : {display : 'block'} } >
        <Brand />
      </div>
      <Alert.Link></Alert.Link>
      <Navbar>
        <Navbar.Collapse id="responsive-navbar-nav-top">
          <Nav>
            <IconContext.Provider value={{ className: 'iconContextheader' }}>
              {dataIconHeader.icons.map((icon, index: number) => (
                <Nav.Link href={icon.link} target={'_blank'}>
                  <RenderIconSideBar icon={icon.iconID} />{' '}
                </Nav.Link>
              ))}
              <Button
                variant="dark"
                onClick={() => setSideBarState(display === true ? false : true)}
                className="me-2"
              >
                <AiOutlineMenu />
              </Button>
            </IconContext.Provider>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
