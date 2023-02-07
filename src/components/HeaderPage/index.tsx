import React from 'react'
import { Alert, Nav, Navbar } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaAutoprefixer } from 'react-icons/fa'
import resume from '../../data/data.json'
import './style.css'
import RenderIconSideBar from '../utils/iconsEnum';

const Header = () => {
  const dataUser = resume.personaldata;
  const dataIconHeader = resume.header;


  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Alert.Link
        href="#"
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 capitalize"
      >
        Hello, here is <FaAutoprefixer size={25} className="iconposition"/> {dataUser.nickname.slice(1)} 
      </Alert.Link>
      <Navbar>
        <Nav>
          <IconContext.Provider
            value={{ className: "iconContextheader" }}
          >
            {
              dataIconHeader.icons.map((icon,index: number) => (
                <Nav.Link
                  href={icon.link}
                  target={'_blank'}
                >
                  <RenderIconSideBar icon={icon.iconID} />{' '}
                </Nav.Link>                
              ))}
          </IconContext.Provider>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
