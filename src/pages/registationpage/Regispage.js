import { useRef } from "react";
import "./registationpage.css";
import { Try } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Regispage() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const Againpassword = useRef();
  const navigate = useNavigate();
  const handleclick = async(e)=>{
e.preventDefault();
 if(Againpassword.current.value !== password.current.value){
    Againpassword.current.setCustomValidity("password don't match!")
 }
 else{
  const user = {
  username: username.current.value,
  email: email.current.value,
  password: password.current.value,
  }
  try {
      await axios.post("/api/auth/register",user);
      navigate('/loginpage')
  } catch (error) {
    console.log(error);
  }
 }

  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight" >
          <form className="loginBox" onSubmit={handleclick}>
            <input placeholder="Username" type="text" ref={username}
            required 
             className="loginInput" />
            <input placeholder="Email"  type="email" ref={email}
            required className="loginInput" />
            <input placeholder="Password" type="password" minLength={6} ref={password}
             required className="loginInput" />
            <input placeholder="Password Again" minLength={6} type="password" ref={Againpassword}
             required  className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <NavLink to='/loginpage'>
            <button className="loginRegisterButton">
              Log into Account
            </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}