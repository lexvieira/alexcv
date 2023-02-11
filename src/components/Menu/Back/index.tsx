import React from 'react'
import { Link } from 'react-router-dom'

const BackHome = () => {
  return <>
    <Link to={"/"} className="primary">
      Back Home
    </Link>
  </>
}

export default BackHome;
