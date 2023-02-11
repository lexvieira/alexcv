import React from 'react'
import { Navbar } from 'react-bootstrap'
import { FaAutoprefixer } from 'react-icons/fa'
import resume from '../../../data/data.json'


const Brand = () => {
  const dataUser = resume.personaldata
  //Include Send Color and Class to the Brand
  return (
    <Navbar.Brand href="/" className='col-md-3 col-lg-2 me-0 px-3 fs-6 capitalize text-light'>
        {/* display === true ? false : true */}
        {/* setSideBarState(true) */}
        Hello, here is <FaAutoprefixer
          size={25}
          className="iconposition"
        />{' '} 
        {dataUser.nickname.slice(1)}{' '}
    </Navbar.Brand>
  )
}

export default Brand;