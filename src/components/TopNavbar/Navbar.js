import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
const  Navbar=()=> {
   const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
   <div className=" topcontainer">
    <div className="top-material">
        <NavLink to="/" style={{textDecoration:"none"}}>
        <span className='facebook'>facebook</span>
        </NavLink>
 </div>
    <div className="searchNav">
    <div className="serachicon" ><SearchIcon/></div>

    <input type="text" className="textsearch" placeholder='serach your friend, posts'/>
    </div>
    <div className="centercontainer">
        <div className="Navhome">HomePage</div>
        <div className="TimeNav">Timeline</div>
    </div>
    <div className="leftcontainer">
        <div className="person">
            <PersonIcon/><span className='number'>1</span>
        </div>
        <div className="chat">
            <ChatIcon/><span className='number'>2</span>
        </div>
        <div className="notification">
  <NotificationsIcon /><span className='number'>3</span>
        </div>
    </div>
    
    <div className="userimage">
        <Link to={"Profilepage/" + user.username}>
        <img src={user.profilePicture ? PF + user.profilePicture : PF + "/person/noAvatar.png"} className='imagcontainer' alt="my pic "/>
        </Link>
    </div>
    
   </div>
  );
};

export default Navbar;