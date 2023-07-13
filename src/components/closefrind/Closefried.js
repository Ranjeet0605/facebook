import React from 'react'
import "./close.css"
const Closefried =({close})=> {

  return (
    <li className="listcontainerer">
            <img className='imgc' src={close.profilepicture} alt='my pic'/>
           <span className='imagecontainer'>{close.username}</span>
          </li>
  );
};

export default Closefried;