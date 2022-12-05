import React from "react";
import '../css/global.css'
import Base from "./Base";

const About = ({doLogout}) => {
    return (
    <center>
        <Base doLogout={doLogout}/>
        <h1>Public</h1>
    </center>
  );
};

export default About;