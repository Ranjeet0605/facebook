import React from 'react';
import "./Sidebar.css";

import { RssFeed, Message, PlayCircle, PeopleOutline, Bookmarks, HelpOutline, Work, Event, School} from '@mui/icons-material';

import Closefried from '../closefrind/Closefried';
import { users } from '../../DummyData1';
const Sidebar=()=> {
  return (
    <div className='SidebarContainer'>
      <div className="container">
        <ul className="containerlist">
            <li className="containerlistner"><RssFeed/><span className='feeed'>feed</span></li>
            <li className="containerlistner"><Message/><span className='feeed'>chats</span></li>
            <li className="containerlistner"><PlayCircle /><span className='feeed'>Videos</span></li>
            <li className="containerlistner"><PeopleOutline/><span className='feeed'>Groups</span></li>
            <li className="containerlistner"><Bookmarks/><span className='feeed'>Bookmarks</span></li>
            <li className="containerlistner"><HelpOutline/><span className='feeed'>Quetions</span></li>
            <li className="containerlistner"><Work/><span className='feeed'>jobs</span></li>
            <li className="containerlistner"><Event/><span className='feeed'>Events</span></li>
            <li className="containerlistner"><School/><span className='feeed'>courses</span></li>
        </ul>
        <ul className="butt">
            <button className="buttn">Show More</button>
        </ul>
        <hr className='newline'></hr>
        <div className="imgonlinesection">
       <ul className="thiscontainer">
        
       {
        users.map((u)=>(
<Closefried key={u.id} close={u}/>
        ))
        }
          </ul>
        </div>

   
      </div>
    </div>
  );
};

export default Sidebar;
