import React, { useState } from "react";
import '../css/global.css';
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

function Base() {
  const Button = styled.button`
  background: white;
  color:grey;
  font-size: 1em;
  margin: 3%;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
  `
  return (
  <center>
    <span className="Header" >
    <Button as={Link} to="/Login"> Login </Button>
    <Button as={Link} to="/About"> About </Button>
    <Button as={Link} to="/loggedin"> Logged In </Button>
    </span>
  </center>
  )
}

export default Base;