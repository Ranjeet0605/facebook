import React, { useEffect, useState } from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profilepage.css"
import Navbar from '../../components/TopNavbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function Profilepage() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;
  
  useEffect(()=>{
   const fetchuser = async()=>{
    try{
      
const res = await axios.get(`/api/users?username=${username}`);

setUser(res.data);

    }catch(error){
     console.log(error);
   }
  }
     fetchuser();
  },[username])
  return (
    <>
    <Navbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={  user.coverPicture ? PF + user.coverPicture : PF + "/person/noCover.png"}
              alt="my pic"
            />
            <img
              className="profileUserImg"
              src={ user.profilePicture ? PF + user.profilePicture : PF + "/person/noAvatar.png"}
              alt="my pic"
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">{user.username && user.username.trim()}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed username={username}/>
          <Rightbar  user={user}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Profilepage