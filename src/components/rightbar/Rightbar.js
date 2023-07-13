import React from 'react';
import "./rightbar.css";
import { users } from '../../DummyData1';
import Online from '../Online/Online';
import Myfriend from '../myfriend/Myfriend';
// import Profilepage from '../../pages/profilepage/Profilepage';
const  Rightbar=({user})=> {

  const Profilecontentonediv = ()=>{
    return (
      <>
      <div className="birthdaygit">
          <img src= "/image2/gift.png" alt="my pic" className="birthdayimage" />
          <span className="massagebyfriend"><b>Pola Foster</b> and <b>other friend</b> have a birthday today.</span>
        </div>
        <div className="imagewidthparty">
          <img src= "/image2/ad.png" alt="my pic" className="frinedparty" />
        </div>
        <h3 className='onlinefr'>Online friends</h3>
        <div className="onlinefrindcontainer">
          <ul className="byultagonline">
            { users.map((u)=>(
           <Online key={u.id} user={u}/>
            ))
            }
          </ul>
        </div>
       
        
      </>
    );
  };
 
  return (
    <div className='rightbarcontainer'>
      <div className="rightbarmaterial">
       {user ?<Myfriend user={user}/>:<Profilecontentonediv/>}
       
       
      </div>

    </div>
  );
};

export default Rightbar;