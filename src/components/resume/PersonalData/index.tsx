import React from 'react'
import resume from '../../../data/data.json'
import Identification from './Identification'
import LinksContact from './Links'
import './style.css'

const PersonalData = () => {
  const dataUser = resume.personaldata

  return (
    <>
      <Identification />
      <div className='linkscontacttop'>
        <LinksContact />        
      </div>

    </>
  )
}

export default PersonalData
