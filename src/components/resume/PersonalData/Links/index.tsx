import React from 'react'
import { Col, Row } from 'react-bootstrap'
import resume from '../../../../data/data.json'
import RenderIconSideBar from '../../../utils/iconsEnum'
import './style.css'

const LinksContact = () => {
  const dataUser = resume.personaldata

  return (
    // <Container fluid >
    <>
      <Row className="contactinfo">
        <Col> 
          <ul className="contactlist1">
            <li>
              <a href={'mailto:' + dataUser.email}>
                <RenderIconSideBar icon={11} /> {dataUser.email}
              </a>
            </li>
            <li>
              <a
                href={dataUser.mobilelink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RenderIconSideBar icon={12} /> <RenderIconSideBar icon={13} />{' '}
                {dataUser.mobile}
              </a>
            </li>
            <li>
              <a
                href={dataUser.skypelink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RenderIconSideBar icon={15} /> {dataUser.skype}
              </a>
            </li>
            <li>
              <a
                href={dataUser.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RenderIconSideBar icon={14} /> {dataUser.linkedin}
              </a>
            </li>
            <li>
              <a
                href={dataUser.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RenderIconSideBar icon={16} /> {dataUser.github}
              </a>
            </li>
            <li>
              <a
                href={dataUser.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RenderIconSideBar icon={17} /> {dataUser.website}{' '}
                <span className="italic">(website under development)</span>
              </a>
            </li>
            <li>
              <a
                href={dataUser.download}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RenderIconSideBar icon={25} /> <span className="italic">(PDF Version)</span>{' '}
              </a>
            </li>            
          </ul>
        </Col>
      </Row>

      {/* // </Container> */}
    </>
  )
}

export default LinksContact
