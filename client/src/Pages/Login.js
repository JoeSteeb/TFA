import React, {useEffect, useState} from "react";
import '../css/global.css'
import Hash from "./Hash";
import Base from "./Base";
import { Link, redirect } from 'react-router-dom'

const Login = ({doLogin}) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleUsername = event =>{
    setUsername(event.target.value);
  }
  const handlePassword = event =>{
    setPass(event.target.value);
  }

  const clear = ()=>
  {
    setUsername("");
    setPass("");
  }

  const Login = async ()=>{    
    let hashedPass = pass;
    hashedPass = Hash(hashedPass);
    let rUser = "";
    try{
      const req = ('http://localhost:5000/getuser/'+ username);
      console.log(req);
      const response = await fetch(req);
      const myJson = await response.json();
      rUser = JSON.parse(myJson);
    }
    catch(err){
      clear();
      console.log('login failed'); 
      return false
    }
    if(hashedPass == rUser.passwd){
      console.log(rUser.user_name, " LOGGED IN")
      doLogin();
      redirect("/loggedin");
      clear();
    }
  }
  return(
    <>
    <Base/>
    <center>
      <div>
      <div>Username</div>
      <input 
        id="name"
        name = "username"
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
          <button
            className="button"
            onClick={Login}>Login
          </button>
      </div>
        <Link to={'/register'}><button className="button">Register</button></Link>
      </div>
      </center>
    </>
  )
};

export default Login;
