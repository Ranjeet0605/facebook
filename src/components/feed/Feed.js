import React, { useState,useEffect, useContext } from 'react';
import "./feed.css";
 import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';



 const Feed=({username})=> {
  const { user} = useContext(AuthContext);

 const [posts, setPosts] = useState([]);

   useEffect(()=>{

      const fetchpost= async()=>{
        const res = username?  
        await axios.get(`/api/posts/profilepage/${username}`):
        await axios.get(`/api/posts/timeline/${user._id}`);
        
        setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
        
       } ) );
      }
      fetchpost();
   },[username, user._id]);
  
  return (
    <div className='feedcontainer'>
    <div className="feedwrapper">
     {(!username ||username === user.username )&& <Share/>} 
    
      {posts.map((P)=>(
        <Post key={P._id} post={P}/>
      ))}
      
    </div> 
    </div>
  );
};

export default Feed;
