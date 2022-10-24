import React, { useState, useEffect } from "react";
import '../css/global.css'

const Register = ({setPage}) => {
    return (
    <div>
      <div>Retype Password</div>
      <input type="password"></input>
      <div>
        <button onClick={()=>setPage(false)}>Register</button>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Register;