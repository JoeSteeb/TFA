import '../css/global.css'
import Base from "./Base";
import React, {useState} from "react";
import Hash from "./Hash";
import { Link } from 'react-router-dom'

const Register = () => {
    let username = "";
    let email = "";
    let pass = "";
    let pass2 = "";
    const createUser = async ()=>{
        let hashedPass = pass;
        hashedPass = Hash(hashedPass);
        if(pass === pass2 
          && (username !== ""
          || pass !== ""
          || pass2 !== "")){
          const body = {
            username: username,
            password: hashedPass,
            email: email
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

    const handleRegister = ()=>{
        createUser();
        username = "";
        pass = "";
      }

      const handleUsername = event =>{
        username = event.target.value;
      }

      const handleEmail = event =>{
        email = event.target.value;
      }

      const handlePassword = event =>{
        pass = event.target.value;
      }

      const handlePassword2 = event =>{
        pass2 = event.target.value;
      }

      return (
      <center>
        <Base/>
        <div>Username</div>
        <input 
            id="username"
            name = "username"
            onChange={handleUsername}
            />
        <div>Email</div>
        <input 
            id="email"
            name = "email"
            onChange={handleEmail}
            />
        <div>Password</div>
        <input 
            id="pass"
            name = "pass"
            type="password"
            onChange={handlePassword}
            />
        <div>Retype Password</div>
        <input 
            id="pass2"
            name = "pass2"
            type="password"
            onChange={handlePassword2}
            />
        <div>
          <Link to={'/Login'}>
            <button className='button' onClick={handleRegister}>Register</button>
          </Link>
        </div>
      </center>);

}
export default Register;