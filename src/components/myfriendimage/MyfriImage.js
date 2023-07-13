import React from 'react';
import "./myfriImag.css";
import { Link } from 'react-router-dom';
import { Style } from '@mui/icons-material';
function MyfriImage({friend}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
  return (
    <div className="imagewithfrine">
      <Link to= {"/Profilepage/" + friend.username }style={{textDecoration:"none"}}>
      <img src={friend.profilepicture ? PF + friend.profilepicture : PF+ "/person/noAvatar.png"} alt="" className="imgaewithf" />
    <span className="feindname">{friend.username}</span>
    </Link>
    </div>
  )
}

export default MyfriImage