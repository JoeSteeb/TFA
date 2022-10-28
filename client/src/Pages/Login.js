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

    const createUser = async (password2)=>{
      console.log("pass = ", pass);
      console.log("pass2 = ", password2);
      if(pass == pass2){
        const body = {
          username: {username},
          password: {pass}
        };
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        const myJson = await response.json();
        console.log(myJson)
      }
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
        setPage(<Register setPage={determinePage} register={createUser}/>);
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
