import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const authContext = useContext(AuthContext);
  const{user, isFetching, error, dispatch} = authContext;
  const handleclick=(e)=>{
 e.preventDefault();
    loginCall({email:email.current.value, password:password.current.value},
      dispatch
      )
  }
  console.log(user);
  console.log(error);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleclick}>
            <input placeholder="Email" type="email" required 
            ref={email}
            className="loginInput" />
            <input placeholder="Password" type="password" 
            required 
            minLength={6}
            ref={password}
            className="loginInput" />
            <button className="loginButton" disabled={isFetching}  >{isFetching ? <CircularProgress style={{'color': 'white'}} />: "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? <CircularProgress style={{'color': 'white'}} />: "Create a New Account"}
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}