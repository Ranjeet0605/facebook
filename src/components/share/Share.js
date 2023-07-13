import React, { useContext, useRef, useState } from 'react';
import "./share.css";
import {PermMedia,Label,LocationOn, Mood, WidthWideOutlined, Cancel} from "@mui/icons-material";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
const Share=()=> {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
   const submitHandler= async(e)=>{
       e.preventDefault();
       const newPost = {
          userId: user._id,
          desc: desc.current.value,
       }
       if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        newPost.img = fileName;
        console.log(newPost);
        try {
          await axios.post("/api/upload", data);
        } catch (err) {}
      }
      try {
        if(file){
        await axios.post("/api/posts", newPost);
        window.location.reload();
        }
      } catch (err) {}
    };
  
  return (
    <div className='sharepage'>
      <div className="sharecontainer">
        <div className="imgcontainer">
            <img src={user.profilePicture ? PF + user.profilePicture : PF + "/person/noAvatar.png"} alt="" className="imagesection" />
            <input className="title" 
              ref={desc}
            placeholder={"What's in your mind"+" " + user.username}/>
        </div>
        <hr className='hrline'></hr>
        {file && (
          <div className="shareimagecontainer">
            <img  className="shareimg" src={URL.createObjectURL(file)}   alt="my pic"
            
             />
             <Cancel className='cancelImage' onClick={()=>setFile(null)}/>
          </div>
        )}
        <form className="buttonsection" onSubmit={submitHandler} >
            <label  htmlFor='file' className="buttonoption">
            <PermMedia htmlColor='orange' className='uicomponants'/>
            <span className="photesandvideo">Photo or Video</span>
            <input style={{display:"none"}} type="file" id="file"
              accept='.png,.jpeg,.jpg'
            
              onChange={(e)=>setFile(e.target.files[0])}
            placeholder="choose file or video "/>
            </label>
            <div className="buttonoption">
            <Label htmlColor='blue'className='uicomponants'/>
            <span className="photesandvideo">Tag </span>
            </div>
            <div className="buttonoption">
            <LocationOn htmlColor='green' className='uicomponants'/>
            <span className="photesandvideo">Location </span>
            </div>
            <div className="buttonoption">
            
            <Mood htmlColor='goldenrod' className='uicomponants'/>
            <span className="photesandvideo">feeling </span>
            </div>
            <div className="bttttn">
            <button className="btttn" type='submit'>Share</button>
        </div>
        </form>
       
      </div>
    </div>
  )
}

export default Share;
