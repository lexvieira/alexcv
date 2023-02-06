import React from 'react'
import { Alert, Nav, Navbar } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { AiFillLinkedin, AiFillSkype, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaAutoprefixer } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'
import resume from '../../data/data.json'
import './style.css'

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
            value={{
              className: 'iconContextheader',
            }}
          >
            <Nav.Link
              className="text-nowrap"
              href="https://github.com/lexvieira"
              target={'_blank'}
            >
              <DiGithubBadge />
            </Nav.Link>
            <Nav.Link
              className="text-nowrap"
              href="https://www.linkedin.com/in/lexvieira"
              target={'_blank'}
            >
              <AiFillLinkedin />
            </Nav.Link>
            <Nav.Link
              className="text-nowrap"
              href="https://api.whatsapp.com/send?phone=13324550267&text=*Contact%20Mobile%20Resume:%20(Write%20your%20text%20here)%0a_________________________%0a"
              target={'_blank'}
            >
              <AiOutlineWhatsApp />
            </Nav.Link>
            <Nav.Link
              className="text-nowrap"
              href="https://join.skype.com/invite/f6u65AYGolDD"
              target={'_blank'}
            >
              <AiFillSkype />
            </Nav.Link>
          </IconContext.Provider>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
