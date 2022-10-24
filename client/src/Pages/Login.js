import React, { useState, useEffect } from "react";
import '../css/global.css'
import Register from "./Register";

const Login = () => {
    var flag = true;
    const [username, setusername] = useState("");
    // ToDo(Critical): Hash These LOL
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");

    const handleUsername = event =>{
      setusername(event.target.value);
    }
    const handlePassword = event =>{
      setPass(event.target.value);
    }
    const handlePassword2 = event =>{
      setPass2(event.target.value);
    }

    var initialPage = (
    <>
    <button>Login</button>
    <div>
    <button onClick={()=>determinePage(flag)}>Not a User? click here</button>
    </div>
    </> 
    )

    const [page, setPage] = useState(initialPage)

    const determinePage = (flag) =>{
      if(flag){
        setPage(<Register setPage={determinePage}/>);
      }
      else{
        setPage(initialPage)
        setusername("");
        setPass("");
      }

    }

    return (
    <div>
      <div>Username</div>
      <input 
      id="login"
      name = "login"
      type="text"
      onChange={handleUsername}
      value={username}
      />
      <div>Password</div>
      <input 
      id="pass"
      name = "pass"
      type="password"
      onChange={handlePassword}
      value={pass}
      />
      <div>
      {page}
      </div>
    </div>
  );
};

export default Login;
