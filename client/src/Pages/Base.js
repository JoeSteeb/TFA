import React, { useState } from "react";
import '../css/global.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Base({doLogout}) {
  return (
  <center>
    <span className="Header" >
    <Link to={'/login'}><button className="button">Login</button></Link>
    <Link to={'/about'}><button className="button">About</button></Link>
    <Link to={'/loggedin'}><button className="button">Logged IN</button></Link>
    <button className="button" onClick={doLogout}>Logout</button>
    </span>
  </center>
  )
}

export default Base;