import React from 'react'
import { Alert, Navbar } from 'react-bootstrap'
import { FaAutoprefixer } from 'react-icons/fa'
import resume from '../../../data/data.json'


const Brand = () => {
  const dataUser = resume.personaldata

  return (
    <Navbar.Brand href="/" id="" className='brandDisplay'>
      <Alert.Link
        href="#"
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 capitalize"
      >
        {/* display === true ? false : true */}
        {/* setSideBarState(true) */}
        Hello, here is <FaAutoprefixer
          size={25}
          className="iconposition"
        />{' '}
        {dataUser.nickname.slice(1)}
      </Alert.Link>
    </Navbar.Brand>
  )
}

export default Brand;