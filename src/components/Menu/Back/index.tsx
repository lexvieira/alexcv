import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BackHome = () => {
  return (
    <>
      <Button variant="primary">
        <Link to={'/'} className="" style={{textDecoration: 'none', color: "#FFF"}}>
          Back Home
        </Link>
      </Button>
    </>
  )
}

export default BackHome
