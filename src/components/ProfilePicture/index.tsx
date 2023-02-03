import React from 'react'
import resume from '../../data/data.json';

  const ProfilePicture = () => {
  const dataUser = resume.personaldata;
  // const objective = resume.pe
    return (
      <img
        src={dataUser.picture}
        className="rounded-circle profile"
        alt="Profile"
      />
    )
  }

  export default ProfilePicture;