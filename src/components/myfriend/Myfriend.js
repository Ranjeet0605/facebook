import React, { useContext, useEffect, useState } from 'react';
import "./Myfriend.css";
import MyfriImage from '../myfriendimage/MyfriImage';
// import { users } from '../../DummyData1';
import RemoveIcon from '@mui/icons-material/Remove';
import { Add  } from '@mui/icons-material';

import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
const  Myfriend=({user})=> {
   const {user:currentuser,dispatch} = useContext(AuthContext);
   const [friends, setFriends] = useState([]);
   const [followed , setFollowed] = useState(false);
   useEffect(()=>{
         setFollowed( currentuser.followings.includes(user._id))
   },[currentuser, user._id]);
    useEffect(()=>{
      const fetchfriends = async()=>{
         try{
   const  res = await axios.get(`/api/users/friends/${user._id}`);
       setFriends(res.data)
}
catch(err){
   console.log(err);
}
         
      }
          fetchfriends();
    },[user]);
   
    const handleclick = async()=>{
      try{
      if(followed){
         await axios.put("/api/users/" + user._id + "/unfollow",{userId: currentuser._id} )
     dispatch({type:"UNFOLLOW", payload: user._id});
      }
      else{
         await axios.put("/api/users/" + user._id + "/follow",{userId: currentuser._id})
     dispatch({type:"FOLLOW", payload: user._id});
       
      }
   }catch(err){
      console.log(err);
   }
setFollowed(!followed)
    }
  return (
    <>
{user.username === currentuser.username && (
   <button className='followthis' onClick={handleclick}>
     {followed ? "Unfollow" : "follow"}{followed ? <RemoveIcon/> : <Add/>}</button>
)}
     <span className="userinfo">User information</span>
 
   
    <div className="cityname">
 <span className="whatcity">city:</span>
 <span className="what">{user.city}</span>
    </div>
    <div className="cityname">
 <span className="whatcity">from:</span>
 <span className="what">{user.from}</span>
    </div>
    <div className="cityname">
 <span className="whatcity">Relations:</span>
 <span className="what">{user.relationship===1 ? "single":user.relationship===1?"Married": "empty"}</span>
    </div>
<div className="allimgecontainer">
{friends.map((u)=>(
 <MyfriImage key={u._id}  friend={u}/>
))}
   
      
    </div>
    </>
  )
}

export default Myfriend;
