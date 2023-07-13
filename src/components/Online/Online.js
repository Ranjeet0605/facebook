import React from 'react'
import "./online.css"
function Online({user}) {
  
  return (
    <li className="bytaglistonline">
              <img src= {user.profilepicture} alt="my pic" className="onlinefrried" />
              <span className="fordot" id='dot'></span>
              <span className="onlinefint">{user.username}</span>
            </li>
  )
}

export default Online
