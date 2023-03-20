import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import * as DiIcons from 'react-icons/di'

//New Version
const IconsList = [
  {
    id: 0,
    Category: 'RiIcons',
    iconName: 'RiContactsLine',
    iconComponent: <RiIcons.RiContactsLine />,
  },
  {
    id: 1,
    Category: 'FaIcons',
    iconName: 'FaScroll',
    iconComponent: <FaIcons.FaScroll />,
  },
  {
    id: 2,
    Category: 'FaIcons',
    iconName: 'FaSchool',
    iconComponent: <FaIcons.FaSchool />,
  },
  {
    id: 3,
    Category: 'FaIcons',
    iconName: 'FaGithub',
    iconComponent: <FaIcons.FaGithub />,
  },
  {
    id: 4,
    Category: 'FaIcons',
    iconName: 'FaLanguage',
    iconComponent: <FaIcons.FaLanguage />,
  },
  {
    id: 5,
    Category: 'FaIcons',
    iconName: 'FaUserFriends',
    iconComponent: <FaIcons.FaUserFriends />,
  },
  {
    id: 6,
    Category: 'FaIcons',
    iconName: 'FaCode',
    iconComponent: <FaIcons.FaCode />,
  },
  {
    id: 7,
    Category: 'FaIcons',
    iconName: 'FaBookReader',
    iconComponent: <FaIcons.FaBookReader />,
  },
  {
    id: 8,
    Category: 'FaIcons',
    iconName: 'FaTheaterMasks',
    iconComponent: <FaIcons.FaTheaterMasks />,
  },
  {
    id: 9,
    Category: 'FaIcons',
    iconName: 'FaBuilding',
    iconComponent: <FaIcons.FaBuilding />,
  },
  {
    id: 10,
    Category: 'FaIcons',
    iconName: 'FaHandsHelping',
    iconComponent: <FaIcons.FaHandsHelping />,
  },
  {
    id: 11,
    Category: 'FaIcons',
    iconName: 'FaRegEnvelope',
    iconComponent: <FaIcons.FaRegEnvelope />,
  },
  {
    id: 12,
    Category: 'FaIcons',
    iconName: 'FaPhoneAlt',
    iconComponent: <FaIcons.FaPhoneAlt />,
  },
  {
    id: 13,
    Category: 'FaIcons',
    iconName: 'FaWhatsapp',
    iconComponent: <FaIcons.FaWhatsapp />,
  },
  {
    id: 14,
    Category: 'FaIcons',
    iconName: 'FaLinkedin',
    iconComponent: <FaIcons.FaLinkedin />,
  },
  {
    id: 15,
    Category: 'FaIcons',
    iconName: 'FaSkype',
    iconComponent: <FaIcons.FaSkype />,
  },
  {
    id: 16,
    Category: 'FaIcons',
    iconName: 'FaGithub',
    iconComponent: <FaIcons.FaGithub />,
  },
  {
    id: 17,
    Category: 'FaIcons',
    iconName: 'FaGlobe',
    iconComponent: <FaIcons.FaGlobe />,
  },
  {
    id: 18,
    Category: 'SiIcons',
    iconName: 'SiTypescript',
    iconComponent: <SiIcons.SiTypescript />,
  },
  {
    id: 19,
    Category: 'FaIcons',
    iconName: 'FaDocker',
    iconComponent: <FaIcons.FaDocker />,
  },
  {
    id: 20,
    Category: 'SiIcons',
    iconName: 'SiNetlify',
    iconComponent: <SiIcons.SiNetlify />,
  },
  {
    id: 21,
    Category: 'DiIcons',
    iconName: 'DiGithubBadge',
    iconComponent: <DiIcons.DiGithubBadge />,
  },
  {
    id: 22,
    Category: 'AiIcons',
    iconName: 'AiFillLinkedin',
    iconComponent: <AiIcons.AiFillLinkedin />,
  },
  {
    id: 23,
    Category: 'AiIcons',
    iconName: 'AiOutlineWhatsApp',
    iconComponent: <AiIcons.AiOutlineWhatsApp />,
  },
  {
    id: 24,
    Category: 'AiIcons',
    iconName: 'AiFillSkyp',
    iconComponent: <AiIcons.AiFillSkype />,
  },
  {
    id: 25,
    Category: 'FaIcons',
    iconName: 'FaRegDotCircle',
    iconComponent: <FaIcons.FaRegDotCircle />,
  },
  
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
  icon: number,
}


const RenderIconsByID: React.FC<Props> = ({ icon }: Props) => {

  // var iconRender =  IconsList.filter(function(iconItem){
  //   return iconItem.id === icon;
  // })
  
  return IconsList[icon].iconComponent;
}

// const RenderIcons = {
//   RenderIconSideBar,
//   RenderIconsByID
// }

// export default RenderIcons;

export default RenderIconsByID;