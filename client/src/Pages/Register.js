import React, { useState, useEffect } from "react";
import '../css/global.css'

const Register = ({setPage, register}) => {
    const click = ()=>{
      setPage(false);
      register("sos");
    }
    return (
    <div>
      <div>Retype Password</div>
      <input type="password"></input>
      <div>
        <button onClick={click}>Register</button>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Register;