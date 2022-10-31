import React, { useState, useEffect } from "react";
import '../css/global.css'
import Hash from "./Hash"

const Register = ({handleUsername, handleEmail, handlePassword, handlePassword2}) => {
    return (
    <div>
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
    </div>
  );
};

export default Register;