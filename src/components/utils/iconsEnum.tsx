import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di'

const IconsArray = [
  <RiIcons.RiContactsLine />,
  <FaIcons.FaScroll />,
  <FaIcons.FaSchool />,
  <FaIcons.FaGithub />,
  <FaIcons.FaLanguage />,
  <FaIcons.FaUserFriends />,
  <FaIcons.FaCode />,
  <FaIcons.FaBookReader />,
  <FaIcons.FaTheaterMasks />,
  <FaIcons.FaBuilding />,
  <FaIcons.FaHandsHelping />,
  <FaIcons.FaRegEnvelope />,
  <FaIcons.FaPhoneAlt />,
  <FaIcons.FaWhatsapp />,
  <FaIcons.FaLinkedin />,
  <FaIcons.FaSkype />,
  <FaIcons.FaGithub />,
  <FaIcons.FaGlobe />, 
  <SiIcons.SiTypescript />,   
  <FaIcons.FaDocker />,
  <SiIcons.SiNetlify />,
  <DiIcons.DiGithubBadge />,
  <AiIcons.AiFillLinkedin />,   
  <AiIcons.AiOutlineWhatsApp />,
  <AiIcons.AiFillSkype />



]  

export enum Icons {
  FaScroll = 1,
  FaSchool = 2,
  FaGithub = 3,
  FaLanguage = 4,
  FaUserFriends = 5,
  FaCode = 6,
  FaBookReader = 7,
  FaTheaterMasks = 8,
  FaBuilding = 9,
  FaHandsHelping = 10,
}

interface Props {
  icon: number
}

const RenderIconSideBar: React.FC<Props> = ({ icon }: Props) => {
  return (
      IconsArray[icon]
  )
}


export default RenderIconSideBar;
