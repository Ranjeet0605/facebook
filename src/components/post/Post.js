import React,{useContext, useEffect, useState} from 'react'
import {MoreVert,ThumbUp,Favorite, FormatIndentDecrease} from "@mui/icons-material";
import "./Post.css";

import axios from 'axios';
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
const Post=({post})=> {
  const {user}= useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [users, setUsers] = useState({});
  useEffect(()=>{
    setIsLike(post.likes.includes(user._id))
  },[user._id, post.likes])
  useEffect(()=>{
   const fetchuser = async()=>{
const res = await axios.get(`/api/users?userId=${post.userId}`);
     
setUsers(res.data);
   }
     fetchuser();
  },[post.userId])
  //for likes ko daynamic kiya hai ab dummydata se nahi liya gya hai
 const [like, setLike]= useState(post.likes.length);
 const [islike,setIsLike]= useState(false);
   const clicklike=async()=>{
    try{
        await axios.put(`/api/posts/${post._id}/like`, user._id);
    }
    catch(err){
      console.log(err)
    }
    setLike( islike ? (like-1) : (like+1));
    
    setIsLike(!islike)
   }
  
  return (
    <div className="posttt">
       <div className="postcontainer">
        <div className="Toppost">

            <div className="leftpost">
              <Link to={"/Profilepage/" + users.username}>
                <img src={ users.profilePicture ? PF+users.profilePicture : PF + "person/noAvatar.png"} alt="my pic" className="imagecontain" /> 
                </Link>
                <span className="forname">{users.username}</span>
            <span className="fortime">{format(post.createdAt)}</span>
            </div>
            <div className="rightpost"><MoreVert/> </div>
        </div>
        <div className="centerposrt">
<div className="sharefeelings">{post?.desc}</div>
<img src={PF+post.img} alt="this pic" className="sharepic" />
        </div>
        <div className="buttompost">
            <div className="rightbuttompost"></div>
          <div className="leftbuttom">
            <div className="leftside">
                <span className="likee" onClick={clicklike}>
          <ThumbUp htmlColor='white' className='like' />
          </span>
          <span className="hearttt" onClick={clicklike}>
          <Favorite htmlColor='white'className='heart'/>
          </span>
           <span className="counting">{like} people like it </span>
            </div>
            <div className="rightside">{post.comment} comments</div>
          </div>
        </div>
        </div> 
    </div>

  );
};

export default Post;