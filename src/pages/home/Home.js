import React from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/TopNavbar/Navbar';
 import "./home.css";
import Profilepage from '../profilepage/Profilepage';
const  Home=()=> {
  return (
    <>
<Navbar/>
<div className="allNavbar">
    <Sidebar/>
   
    <Feed/>
    <Rightbar/>
    </div>
    

    </>
  );
};

export default Home;